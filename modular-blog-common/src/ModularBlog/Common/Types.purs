module ModularBlog.Common.Types where

import Prelude

import Control.Monad.State (State)
import Data.Generic.Rep (class Generic)
import Data.List (List)
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)
import Effect.Aff (Aff)
import Halogen as H
import ModularBlog.Common.MuEditor as MuEditor
import ModularBlog.Common.Mucode as MuCode
import Type.Prelude (class IsSymbol, Proxy(..))

-- =============================================================================
-- Page
-- =============================================================================

type Page =
  { name :: String
  , static_content :: String
  , stylesheet_hrefs :: Array String
  , note :: HyperNote
  }

data PageQuery (a :: Type)

type PageInput =
  { page :: Page
  }

type PageOutput = Void

data PageAction
  = Initialize_PageAction
  | Receive_PageAction PageInput

-- =============================================================================
-- Note meta
-- =============================================================================

-- | `PlainNote` supports `Decode` and `Encode`.
type PlainNote = Note Void

-- | `PlainNote` DOESN'T support `Decode` and `Encode`.
type HyperNote = Note RenderNoteHTML

newtype RenderNoteHTML = RenderNoteHTML (RenderM (Array NoteHTML))

derive instance Newtype RenderNoteHTML _

-- =============================================================================
-- Note
-- =============================================================================

data Note a
  = Hole
  | Literal String
  | Named NoteName
  | Styled Style (Note a)
  | Grouped Group (List (Note a))
  | Image ImageSize ImageStyle String
  | Inject a

derive instance Generic (Note a) _

derive instance Functor Note

instance MuCode.Encode PlainNote where
  encode x = MuCode.generic_encode x

instance MuCode.Decode PlainNote where
  parse x = MuCode.generic_parse x

instance MuEditor.Editable PlainNote where
  render' x y = MuEditor.generic_render x y
  default x = MuEditor.generic_default x

newtype NoteName = NoteName String

derive instance Newtype NoteName _
derive instance Generic NoteName _
derive newtype instance Eq NoteName
derive newtype instance Ord NoteName

instance MuCode.Encode NoteName where
  encode x = MuCode.generic_encode x

instance MuCode.Decode NoteName where
  parse x = MuCode.generic_parse x

instance MuEditor.Editable NoteName where
  render' wrap x = MuEditor.generic_render wrap x
  default x = MuEditor.generic_default x

data Style
  = Title
  | Subtitle
  | Section
  | Subsection
  | Quote
  | Block
  | Code

derive instance Generic Style _

instance Show Style where
  show x = genericShow x

instance MuCode.Encode Style where
  encode x = MuCode.generic_encode x

instance MuCode.Decode Style where
  parse x = MuCode.generic_parse x

instance MuEditor.Editable Style where
  render' x y = MuEditor.generic_render x y
  default x = MuEditor.generic_default x

data Group
  = Column
  | Row

derive instance Generic Group _

instance Show Group where
  show x = genericShow x

instance MuCode.Encode Group where
  encode x = MuCode.generic_encode x

instance MuCode.Decode Group where
  parse x = MuCode.generic_parse x

instance MuEditor.Editable Group where
  render' x y = MuEditor.generic_render x y
  default x = MuEditor.generic_default x

data ImageSize
  = FillWidth_ImageSize
  | Actual_ImageSize

derive instance Generic ImageSize _

instance Show ImageSize where
  show x = genericShow x

instance MuCode.Encode ImageSize where
  encode x = MuCode.generic_encode x

instance MuCode.Decode ImageSize where
  parse x = MuCode.generic_parse x

instance MuEditor.Editable ImageSize where
  render' x y = MuEditor.generic_render x y
  default x = MuEditor.generic_default x

data ImageStyle
  = Normal_ImageStyle
  | Shadowed_ImageStyle

derive instance Generic ImageStyle _

instance Show ImageStyle where
  show x = genericShow x

instance MuCode.Encode ImageStyle where
  encode x = MuCode.generic_encode x

instance MuCode.Decode ImageStyle where
  parse x = MuCode.generic_parse x

instance MuEditor.Editable ImageStyle where
  render' x y = MuEditor.generic_render x y
  default x = MuEditor.generic_default x

-- =============================================================================
-- Utility types
-- =============================================================================

data Flag (name :: Symbol) = Flag Boolean

derive instance Generic (Flag name) _

instance Show (Flag name) where
  show x = genericShow x

instance MuCode.Encode (Flag name) where
  encode x = MuCode.generic_encode x

instance MuCode.Decode (Flag name) where
  parse x = MuCode.generic_parse x

-- TODO: need to change how Editable is define to allow for non-select-based edit controls
-- -- instance IsSymbol name => MuEditor.Editable (Flag name) where
-- --   render' wrap (Flag b) = ?a
-- --   default = ?a

-- =============================================================================
-- Miscellaneous types
-- =============================================================================

type NoteHTML = H.ComponentHTML PageAction NoteSlots Aff

type NoteSlots = (widget :: WidgetSlot WidgetSlotId)
_widget = Proxy :: Proxy "widget"

type WidgetSlot slotId = H.Slot WidgetQuery WidgetOutput slotId

newtype WidgetSlotId = WidgetSlotId Int

derive instance Newtype WidgetSlotId _

data WidgetQuery (a :: Type)

type WidgetOutput = Void

type RenderNoteEnv =
  { widgetSlotId :: WidgetSlotId
  }

initialRenderNoteEnv :: RenderNoteEnv
initialRenderNoteEnv =
  { widgetSlotId: WidgetSlotId 0
  }

type RenderM = State RenderNoteEnv