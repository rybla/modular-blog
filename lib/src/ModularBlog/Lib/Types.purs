module ModularBlog.Lib.Types where

import Data.Generic.Rep (class Generic)
import ModularBlog.Lib.Mucode as Mu

-- =============================================================================
-- Page
-- =============================================================================

newtype Page = Page
  { name :: String
  , note :: Note
  }

-- =============================================================================
-- Note
-- =============================================================================

data Note
  = Literal String
  | Styled Style Note
  | Grouped Grouping Note

derive instance Generic Note _

instance Mu.Encode Note where
  encode x = Mu.generic_encode x

instance Mu.Decode Note where
  parse x = Mu.generic_parse x

data Style
  = Quote
  | Block
  | Code

derive instance Generic Style _

instance Mu.Encode Style where
  encode x = Mu.generic_encode x

instance Mu.Decode Style where
  parse x = Mu.generic_parse x

data Grouping
  = Row
  | Column

derive instance Generic Grouping _

instance Mu.Encode Grouping where
  encode x = Mu.generic_encode x

instance Mu.Decode Grouping where
  parse x = Mu.generic_parse x

