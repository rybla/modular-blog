module ModularBlog.Lib.Types where

import Halogen
import Prelude

import Control.Monad.State (State)
import Data.Generic.Rep (class Generic)
import Data.List (List)
import Data.Newtype (class Newtype)
import Data.Show.Generic (genericShow)
import Effect.Aff (Aff)
import ModularBlog.Lib.Mucode as Mu
import Type.Prelude (Proxy(..))

-- =============================================================================
-- Page
-- =============================================================================

type Page =
  { name :: String
  , static_content :: String
  , stylesheet_hrefs :: Array String
  , note :: Note Void
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

-- | `PlainNote` DOESN'T support `Decode` and `Encode`.
type HyperNote = Note RenderNoteHTML

newtype RenderNoteHTML = RenderNoteHTML (RenderM (Array NoteHTML))

derive instance Newtype RenderNoteHTML _

data Note a
  = Literal String
  | Styled Style (Note a)
  | Grouped Group (List (Note a))
  | Inject a

derive instance Generic (Note a) _

instance Mu.Encode PlainNote where
  encode x = Mu.generic_encode x

instance Mu.Decode PlainNote where
  parse x = Mu.generic_parse x

data Style
  = Quote
  | Block
  | Code

derive instance Generic Style _

instance Show Style where
  show x = genericShow x

instance Mu.Encode Style where
  encode x = Mu.generic_encode x

instance Mu.Decode Style where
  parse x = Mu.generic_parse x

data Group
  = Row
  | Column

derive instance Generic Group _

instance Show Group where
  show x = genericShow x

instance Mu.Encode Group where
  encode x = Mu.generic_encode x

instance Mu.Decode Group where
  parse x = Mu.generic_parse x

type NoteHTML = ComponentHTML PageAction NoteSlots Aff

type NoteSlots = (widget :: WidgetSlot WidgetSlotId)
_widget = Proxy :: Proxy "widget"

type WidgetSlot slotId = Slot WidgetQuery WidgetOutput slotId

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