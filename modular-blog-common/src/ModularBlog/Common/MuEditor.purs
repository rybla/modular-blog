-- | A simple structure editor.
module ModularBlog.Common.MuEditor where

import Prelude

import Data.Array as Array
import Data.Generic.Rep (class Generic, Argument(..), Constructor(..), NoArguments(..), NoConstructors, Product(..), Sum(..), from, to)
import Data.Lazy (Lazy)
import Data.Lazy as Lazy
import Data.Maybe (maybe')
import Data.Tuple.Nested (type (/\), (/\))
import Effect.Aff (Aff)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import ModularBlog.Common.Types (PlainNote)
import Partial.Unsafe (unsafeCrashWith)
import Type.Prelude (class IsSymbol, Proxy(..), reflectSymbol)

type EditableHTML = H.ComponentHTML Action Slots Aff

data Query e a
type Input e = {}
data Output = New_Note PlainNote
type State e = {}
data Action = Put_Note PlainNote
type Slots = ()

-- =============================================================================
-- editorComponent
-- =============================================================================

component :: forall e. Editable e => H.Component (Query e) (Input e) Output Aff
component = unsafeCrashWith ""

-- =============================================================================
-- Editable
-- =============================================================================

class Editable a where
  render' :: (a -> PlainNote) -> a -> Array (String /\ Lazy PlainNote /\ EditableHTML) /\ EditableHTML
  default :: Proxy a -> a

render :: forall a. Editable a => (a -> PlainNote) -> a -> EditableHTML
render wrap a =
  let
    options /\ h = render' wrap a
  in
    HH.div
      [ HP.style "display: flex; flex-direction: column; gap: 0.5em" ]
      [ HH.select
          [ HE.onValueChange
              ( \name ->
                  options
                    # Array.find (\(name' /\ _ /\ _) -> name == name')
                    # maybe' (\_ -> unsafeCrashWith ("unrecognized constructor name: " <> show name)) identity
                    # (\(_ /\ lazy_note /\ _) -> Put_Note (lazy_note # Lazy.force))
              )
          ]
          (options # map (\(_ /\ _ /\ h') -> h'))
      , h
      ]

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
  genericArgs_render :: (a -> PlainNote) -> a -> Array EditableHTML
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
  generic_render' :: (a -> PlainNote) -> a -> EditableHTML
  generic_renderOptions' :: Proxy a -> (a -> PlainNote) -> Array (String /\ Lazy PlainNote /\ EditableHTML)
  generic_default' :: Proxy a -> a

instance Generic_Editable NoConstructors where
  generic_render' wrap v = generic_render' wrap v
  generic_renderOptions' v wrap = generic_renderOptions' v wrap
  generic_default' v = generic_default' v

instance (IsSymbol name, GenericArgs_Editable a) => Generic_Editable (Constructor name a) where
  generic_render' wrap (Constructor a) = HH.div [ HP.class_ (H.ClassName "Editable-Constructor") ] (genericArgs_render (wrap <<< Constructor) a)
  generic_renderOptions' p wrap = [ name /\ (Lazy.defer \_ -> wrap (generic_default' p)) /\ HH.select [ HP.value name ] [ HH.text name ] ]
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

generic_render :: forall a rep. Generic a rep => Generic_Editable rep => (a -> PlainNote) -> a -> EditableHTML
generic_render wrap a = generic_render' (wrap <<< to) (from a)

generic_renderOptions :: forall a rep. Generic a rep => Generic_Editable rep => Proxy a -> (a -> PlainNote) -> Array (String /\ Lazy PlainNote /\ EditableHTML)
generic_renderOptions _ wrap = generic_renderOptions' (Proxy :: Proxy rep) (wrap <<< to)

generic_default :: forall a rep. Generic a rep => Generic_Editable rep => Proxy a -> a
generic_default _ = generic_default' (Proxy :: Proxy rep) # to
