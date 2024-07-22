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
import Type.Prelude (Proxy(..))

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
-- Note
-- =============================================================================

-- | `PlainNote` supports `Decode` and `Encode`.
type PlainNote = Note Void

instance MuEditor.Editable PlainNote where
  render' x y = MuEditor.generic_render x y
  default x = MuEditor.generic_default x

-- | `PlainNote` DOESN'T support `Decode` and `Encode`.
type HyperNote = Note RenderNoteHTML

newtype RenderNoteHTML = RenderNoteHTML (RenderM (Array NoteHTML))

derive instance Newtype RenderNoteHTML _

data Note a
  = Hole
  | Literal String
  | Named String
  | Styled Style (Note a)
  | Grouped Group (List (Note a))
  | Inject a

derive instance Generic (Note a) _

derive instance Functor Note

instance MuCode.Encode PlainNote where
  encode x = MuCode.generic_encode x

instance MuCode.Decode PlainNote where
  parse x = MuCode.generic_parse x

data Style
  = Quote
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
  = Row
  | Column

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