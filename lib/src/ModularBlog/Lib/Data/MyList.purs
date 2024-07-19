module ModularBlog.Lib.Data.MyList where

import Data.Generic.Rep (class Generic)
import Data.List (List)

newtype MyList a = MyList (List a)

derive instance Generic (MyList a) _

