-- | A simple structure editor.
module ModularBlog.Common.MuEditor where

import Prelude

import Data.Array as Array
import Data.Generic.Rep (class Generic, Argument(..), Constructor(..), NoArguments(..), NoConstructors, Product(..), Sum(..), from, to)
import Data.Lazy (Lazy)
import Data.Lazy as Lazy
import Data.List (List(..))
import Data.Maybe (Maybe(..), isJust, maybe')
import Data.Tuple (Tuple(..), snd)
import Data.Tuple.Nested (type (/\), (/\))
import Effect.Aff (Aff)
import Effect.Unsafe as Effect.Unsafe
import Halogen (HalogenM)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import Partial.Unsafe (unsafeCrashWith)
import Type.Prelude (class IsSymbol, Proxy(..), reflectSymbol)
import Web.Event.Event as Web.Event
import Web.HTML.HTMLSelectElement as Web.HTML.HTMLSelectElement
import Web.HTML.HTMLTextAreaElement as Web.HTML.HTMLTextAreaElement

type EditableHTML e = H.ComponentHTML (Action e) Slots Aff

data Query e a = Put_Query e a

derive instance Functor (Query e)

type Input e = { val :: e }

data Output e = Updated e

type State e = { val :: e }

data Action e = Put_Action e | Receive_Action (Input e)

type Slots :: Row Type
type Slots = ()

-- =============================================================================
-- editorComponent
-- =============================================================================

component :: forall e. Editable e => H.Component (Query e) (Input e) (Output e) Aff
component = H.mkComponent { initialState, eval, render: renderComponent }
  where
  initialState { val } = { val }

  eval = H.mkEval H.defaultEval { receive = Just <<< Receive_Action, handleQuery = handleQuery, handleAction = handleAction }

  handleQuery :: forall a. Query e a -> HalogenM (State e) (Action e) Slots (Output e) Aff (Maybe a)
  handleQuery = case _ of
    Put_Query val a -> do
      H.modify_ _ { val = val }
      pure (Just a)

  handleAction :: Action e -> HalogenM (State e) (Action e) Slots (Output e) Aff Unit
  handleAction = case _ of
    Put_Action val -> do
      H.modify_ _ { val = val }
      H.raise (Updated val)
    Receive_Action input -> H.put (initialState input)

  renderComponent { val } = render identity val

-- =============================================================================
-- Editable
-- =============================================================================

class Editable a where
  render' :: forall b. (a -> b) -> a -> Array (String /\ Boolean /\ Lazy b) /\ Array (EditableHTML b)
  default :: Proxy a -> a

render :: forall a b. Editable a => (a -> b) -> a -> EditableHTML b
render wrap a =
  let
    options /\ hs = render' wrap a
  in
    HH.div
      [ HP.class_ (H.ClassName "Editable-Constructor") ]
      ( [ if Array.length options == 1 then []
          else
            [ HH.select
                [ HE.onValueChange \name ->
                    options
                      # Array.find (\(name' /\ _) -> name == name')
                      # maybe' (\_ -> unsafeCrashWith ("unrecognized constructor name: " <> show name)) identity
                      # (\(_ /\ _ /\ lazy_b) -> Put_Action (lazy_b # Lazy.force))
                , HE.onChange \event ->
                    let
                      name = event
                        # Web.Event.target
                        # maybe' (\_ -> unsafeCrashWith "even did not have an event target") identity
                        # Web.HTML.HTMLSelectElement.fromEventTarget
                        # maybe' (\_ -> unsafeCrashWith "event target couldn't be converted into a HTMLSelectElement") identity
                        # Web.HTML.HTMLSelectElement.value
                        # Effect.Unsafe.unsafePerformEffect
                    in
                      options
                        # Array.find (\(name' /\ _) -> name == name')
                        # maybe' (\_ -> unsafeCrashWith ("unrecognized constructor name: " <> show name)) identity
                        # (\(_ /\ _ /\ lazy_b) -> Put_Action (lazy_b # Lazy.force))
                ]
                (options # map (\(name /\ selected /\ _) -> HH.option [ HP.value name, HP.selected selected ] [ HH.text name ]))
            ]
        , if Array.length hs == 0 then []
          else if Array.length options == 1 then hs
          else
            [ HH.div [ HP.class_ (H.ClassName "Editable-Args") ] hs ]
        ] # Array.fold
      )

-- =============================================================================
-- standard instances
-- =============================================================================

instance Editable Void where
  render' _ = absurd
  default _ = unsafeCrashWith "cannot create a default term of type Void"

instance Editable Unit where
  render' wrap it = [ "Unit" /\ true /\ (Lazy.defer \_ -> wrap it) ] /\ []
  default _ = unit

instance Editable Int where
  render' wrap i =
    [ "Int" /\ true /\ (Lazy.defer \_ -> wrap i) ] /\
      [ HH.div [ HP.class_ (H.ClassName "Editable-Int") ] [ HH.text (show i) ] ]
  default _ = 0

instance Editable Boolean where
  render' wrap b =
    [ "Boolean" /\ true /\ (Lazy.defer \_ -> wrap b) ] /\
      [ HH.div [ HP.class_ (H.ClassName "Editable-Boolean") ] [ HH.text (show b) ] ]
  default _ = false

instance Editable String where
  render' wrap s =
    [ "String" /\ true /\ (Lazy.defer \_ -> wrap s) ] /\
      [ HH.textarea
          [ HP.class_ (H.ClassName "Editable-String")
          , HE.onChange
              ( \event ->
                  let
                    s' = event
                      # Web.Event.target
                      # maybe' (\_ -> unsafeCrashWith "even did not have an event target") identity
                      # Web.HTML.HTMLTextAreaElement.fromEventTarget
                      # maybe' (\_ -> unsafeCrashWith "event target couldn't be converted into a HTMLSelectElement") identity
                      # Web.HTML.HTMLTextAreaElement.value
                      # Effect.Unsafe.unsafePerformEffect
                  in
                    Put_Action (wrap s')
              )
          , HP.value s
          ]
      ]
  default _ = ""

instance Editable a => Editable (List a) where
  render' wrap l =
    let
      html = case l of
        Nil ->
          HH.div
            []
            [ HH.button
                [ HP.style ""
                , HE.onClick (\_ -> Put_Action (wrap (Cons (default (Proxy :: Proxy a)) l)))
                ]
                [ HH.text "➕" ]
            ]
        Cons h t ->
          HH.div
            [ HP.class_ (H.ClassName "Editable-List-Cons") ]
            [ HH.div
                [ HP.style "display: flex; flex-direction: row; gap: 0.5em" ]
                [ HH.button
                    [ HP.style ""
                    , HE.onClick (\_ -> Put_Action (wrap (Cons (default (Proxy :: Proxy a)) l)))
                    ]
                    [ HH.text "➕" ]
                , HH.button
                    [ HP.style ""
                    , HE.onClick (\_ -> Put_Action (wrap t))
                    ]
                    [ HH.text "➖" ]
                ]
            , render (wrap <<< (_ `Cons` t)) h
            , render (wrap <<< (h `Cons` _)) t
            ]
    in
      [ "List" /\ true /\ (Lazy.defer \_ -> wrap l) ] /\ [ html ]
  default _ = Nil

-- =============================================================================
-- GenericCases_Editable
-- =============================================================================

{-
forms of generic representations of types:
  type X = NoConstructors
  type Y = Constructor "Y1" NoArguments
  type Z = Sum (Constructor "Z1" NoArguments) (Constructor "Z2" NoArguments)
  type W = Sum (Constructor "W1" (Product (Argument A) (Product B))) (Constructor "W2" (Product (Argument C) (Product D)))
-}

-- GenericArgs_Editable

class GenericArgs_Editable a where
  genericArgs_render :: forall b. (a -> b) -> a -> Array (EditableHTML b)
  genericArgs_default :: Proxy a -> a

instance GenericArgs_Editable NoArguments where
  genericArgs_render _wrap NoArguments = []
  genericArgs_default _ = NoArguments

instance Editable a => GenericArgs_Editable (Argument a) where
  genericArgs_render wrap (Argument a) = [ render (wrap <<< Argument) a ]
  genericArgs_default _ = Argument (default (Proxy :: Proxy a))

instance (GenericArgs_Editable a, GenericArgs_Editable b) => GenericArgs_Editable (Product a b) where
  genericArgs_render wrap (Product a b) =
    let
      as = genericArgs_render (wrap <<< (_ `Product` b)) a
      bs = genericArgs_render (wrap <<< (a `Product` _)) b
    in
      as <> bs
  genericArgs_default _ = Product (genericArgs_default (Proxy :: Proxy a)) (genericArgs_default (Proxy :: Proxy b))

-- Generic_Editable

class Generic_Editable a where
  generic_render' :: forall b. (a -> b) -> a -> Array (EditableHTML b)
  generic_renderOptions' :: forall b. Maybe a -> (a -> b) -> Array (String /\ Boolean /\ Lazy b)
  generic_default' :: Proxy a -> a

instance Generic_Editable NoConstructors where
  generic_render' wrap v = generic_render' wrap v
  generic_renderOptions' _ _ = []
  generic_default' v = generic_default' v

instance (IsSymbol name, GenericArgs_Editable a) => Generic_Editable (Constructor name a) where
  -- generic_render' wrap (Constructor a) = HH.div [ HP.class_ (H.ClassName "Editable-Constructor") ] (genericArgs_render (wrap <<< Constructor) a)
  generic_render' wrap (Constructor a) = genericArgs_render (wrap <<< Constructor) a
  generic_renderOptions' mb_a wrap = [ name /\ isJust mb_a /\ (Lazy.defer \_ -> wrap (generic_default' (Proxy :: Proxy (Constructor name a)))) ]
    where
    name = reflectSymbol (Proxy :: Proxy name)
  generic_default' _ = Constructor (genericArgs_default (Proxy :: Proxy a))

instance (Generic_Editable a, Generic_Editable b) => Generic_Editable (Sum a b) where
  generic_render' wrap = case _ of
    Inl a -> generic_render' (wrap <<< Inl) a
    Inr b -> generic_render' (wrap <<< Inr) b
  generic_renderOptions' mb_sum wrap =
    generic_renderOptions' (mb_sum >>= unSum Just (const Nothing)) (wrap <<< Inl) <>
      generic_renderOptions' (mb_sum >>= unSum (const Nothing) Just) (wrap <<< Inr)
  generic_default' _ = Inl (generic_default' (Proxy :: Proxy a))

unSum :: forall a b c. (a -> c) -> (b -> c) -> Sum a b -> c
unSum f g = case _ of
  Inl a -> f a
  Inr b -> g b

-- generic utilities

generic_render :: forall a b rep. Generic a rep => Generic_Editable rep => (a -> b) -> a -> Array (String /\ Boolean /\ Lazy b) /\ Array (EditableHTML b)
generic_render wrap a = generic_renderOptions' (Just rep) (wrap <<< to) /\ generic_render' (wrap <<< to) rep
  where
  rep = from a

generic_default :: forall a rep. Generic a rep => Generic_Editable rep => Proxy a -> a
generic_default _ = generic_default' (Proxy :: Proxy rep) # to
