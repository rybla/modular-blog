-- | Simple string formatting.
module ModularBlog.Common.Data.String.SimpleFormat where

import Prelude

import Data.Map (Map)
import Data.Map as Map
import Data.Maybe (Maybe(..))
import Data.String as String
import Partial.Unsafe (unsafeCrashWith)
import Prim.Row as Row
import Prim.RowList (class RowToList, RowList)
import Prim.RowList as RowList
import Record as Record
import Type.Prelude (class IsSymbol, Proxy(..), reflectSymbol)
import Type.RowList (class ListToRow)

format :: forall r. ReifyRecord r => Record r -> String -> String
format r = go
  where
  m = reifyRecord r
  start_delim = "{{"
  end_delim = "}}"

  splitFirst delim s = do
    i <- s # String.indexOf (String.Pattern delim)
    let
      { before, after } = s # String.splitAt i
      after' = after # String.drop (String.length delim)
    pure { before, after: after' }

  go s = case s # splitFirst start_delim of
    Nothing -> s
    Just { before: s_1, after: s_2 } -> case s_2 # splitFirst end_delim of
      Nothing -> unsafeCrashWith ("[format] no ending delimeter (" <> show end_delim <> ") in rest of format string: " <> show s_2)
      Just { before: s_2_1, after: s_2_2 } -> case m # Map.lookup s_2_1 of
        Nothing -> unsafeCrashWith ("[format] format var not substituted: " <> show s_2_1)
        Just s_2_1' -> s_1 <> s_2_1' <> go s_2_2

class ReifyRecord r where
  reifyRecord :: Record r -> Map String String

instance (ListToRow l r, RowToList r l, ReifyRowList l r) => ReifyRecord r where
  reifyRecord r = reifyRowList (Proxy :: Proxy l) r

class ReifyRowList (l :: RowList Type) (r :: Row Type) where
  reifyRowList :: Proxy l -> Record r -> Map String String

instance ReifyRowList RowList.Nil r where
  reifyRowList _ _ = Map.empty

instance
  ( IsSymbol x
  , ReifyRowList l r
  , Row.Cons x String r_ r
  ) =>
  ReifyRowList (RowList.Cons x String l) r where
  reifyRowList _ r =
    Map.insert
      (reflectSymbol (Proxy :: Proxy x))
      (Record.get (Proxy :: Proxy x) r)
      (reifyRowList (Proxy :: Proxy l) r)
