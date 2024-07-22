-- | A simple structure editor.
module ModularBlog.Common.MuEditor where

import Prelude

import Data.Array as Array
import Data.Generic.Rep (class Generic, Argument(..), Constructor(..), NoArguments(..), NoConstructors, Product(..), Sum(..), from, to)
import Data.Lazy (Lazy)
import Data.Lazy as Lazy
import Data.Maybe (Maybe(..), maybe')
import Data.Tuple.Nested (type (/\), (/\))
import Effect.Aff (Aff)
import Halogen (HalogenM)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import Partial.Unsafe (unsafeCrashWith)
import Type.Prelude (class IsSymbol, Proxy(..), reflectSymbol)

type EditableHTML e = H.ComponentHTML (Action e) Slots Aff

data Query e a = Put_Query e a

derive instance Functor (Query e)

type Input e = { val :: e }

data Output e = Updated e

type State e = { val :: e }

data Action e = Put_Action e

type Slots :: Row Type
type Slots = ()

-- =============================================================================
-- editorComponent
-- =============================================================================

component :: forall e. Editable e => H.Component (Query e) (Input e) (Output e) Aff
component = H.mkComponent { initialState, eval, render: renderComponent }
  where
  initialState { val } = { val }

  eval = H.mkEval H.defaultEval { handleQuery = handleQuery }

  handleQuery :: forall a. Query e a -> HalogenM (State e) (Action e) Slots (Output e) Aff (Maybe a)
  handleQuery = case _ of
    Put_Query val a -> do
      H.modify_ _ { val = val }
      pure (Just a)

  renderComponent { val } = render identity val

-- =============================================================================
-- Editable
-- =============================================================================

class Editable a where
  render' :: forall b. (a -> b) -> a -> Array (String /\ Lazy b) /\ EditableHTML b
  default :: Proxy a -> a

render :: forall a b. Editable a => (a -> b) -> a -> EditableHTML b
render wrap a =
  let
    options /\ h = render' wrap a
  in
    if Array.length options == 1 then
      h
    else
      HH.div
        [ HP.style "display: flex; flex-direction: column; gap: 0.5em" ]
        [ HH.select
            [ HE.onValueChange
                ( \name ->
                    options
                      # Array.find (\(name' /\ _) -> name == name')
                      # maybe' (\_ -> unsafeCrashWith ("unrecognized constructor name: " <> show name)) identity
                      # (\(_ /\ lazy_b) -> Put_Action (lazy_b # Lazy.force))
                )
            ]
            (options # map (\(name /\ _) -> HH.select [ HP.value name ] [ HH.text name ]))
        , h
        ]

-- =============================================================================
-- standard instances
-- =============================================================================

instance Editable Int where
  render' wrap i =
    [ "Int" /\ (Lazy.defer \_ -> wrap i) ] /\
      HH.div [] [ HH.text (show i) ]
  default _ = 0

instance Editable Boolean where
  render' wrap b =
    [ "Boolean" /\ (Lazy.defer \_ -> wrap b) ] /\
      HH.div [] [ HH.text (show b) ]
  default _ = false

instance Editable String where
  render' wrap s =
    [ "String" /\ (Lazy.defer \_ -> wrap s) ] /\
      HH.div [] [ HH.textarea [ HE.onValueChange (Put_Action <<< wrap), HP.value s ] ]
  default _ = ""

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
  generic_render' :: forall b. (a -> b) -> a -> EditableHTML b
  generic_renderOptions' :: forall b. Proxy a -> (a -> b) -> Array (String /\ Lazy b)
  generic_default' :: Proxy a -> a

instance Generic_Editable NoConstructors where
  generic_render' wrap v = generic_render' wrap v
  generic_renderOptions' v wrap = generic_renderOptions' v wrap
  generic_default' v = generic_default' v

instance (IsSymbol name, GenericArgs_Editable a) => Generic_Editable (Constructor name a) where
  generic_render' wrap (Constructor a) = HH.div [ HP.class_ (H.ClassName "Editable-Constructor") ] (genericArgs_render (wrap <<< Constructor) a)
  generic_renderOptions' p wrap = [ name /\ (Lazy.defer \_ -> wrap (generic_default' p)) ]
    where
    name = reflectSymbol (Proxy :: Proxy name)
  generic_default' _ = Constructor (genericArgs_default (Proxy :: Proxy a))

instance (Generic_Editable a, Generic_Editable b) => Generic_Editable (Sum a b) where
  generic_render' wrap = case _ of
    Inl a -> generic_render' (wrap <<< Inl) a
    Inr b -> generic_render' (wrap <<< Inr) b
  generic_renderOptions' _ wrap = generic_renderOptions' (Proxy :: Proxy a) (wrap <<< Inl) <> generic_renderOptions' (Proxy :: Proxy b) (wrap <<< Inr)
  generic_default' _ = Inl (generic_default' (Proxy :: Proxy a))

-- generic utilities

generic_render :: forall a b rep. Generic a rep => Generic_Editable rep => (a -> b) -> a -> EditableHTML b
generic_render wrap a = generic_render' (wrap <<< to) (from a)

generic_renderOptions :: forall a b rep. Generic a rep => Generic_Editable rep => Proxy a -> (a -> b) -> Array (String /\ Lazy b)
generic_renderOptions _ wrap = generic_renderOptions' (Proxy :: Proxy rep) (wrap <<< to)

generic_default :: forall a rep. Generic a rep => Generic_Editable rep => Proxy a -> a
generic_default _ = generic_default' (Proxy :: Proxy rep) # to
