module ModularBlog.Common.Data.String.TypedFormat where

import Prelude

import Data.Array as Array
import Data.Symbol (class IsSymbol, reflectSymbol)
import Partial.Unsafe (unsafeCrashWith)
import Prim.Row (class Cons)
import Record as Record
import Type.Prelude (Proxy(..))

-- =============================================================================

type Format f = Array (FormatItem f)

-- newtype Format = Format (forall r. FormatK r -> r)

-- type FormatK r = forall f. IsFormat f => f -> r

-- type Format' f = Array (FormatItem f)

-- mkFormat :: FormatK Format
-- mkFormat a = Format \k -> k a

-- runFormat :: forall f. FormatK f -> Format -> f
-- runFormat k1 (Format k2) = k2 k1

-- class IsFormat f

-- =============================================================================

newtype ProxyKey v (rec :: Row Type) = ProxyKey (forall r. ProxyKeyK v rec r -> r)
type ProxyKeyK v (rec :: Row Type) r = forall x rec_. IsSymbol x => Cons x v rec_ rec => Proxy x -> r

mkProxyKey :: forall v rec. ProxyKeyK v rec (ProxyKey v rec)
mkProxyKey a = ProxyKey \k -> k a

runProxyKey :: forall v rec r. ProxyKeyK v rec r -> ProxyKey v rec -> r
runProxyKey k1 (ProxyKey k2) = k2 k1

-- =============================================================================

data FormatItem (f :: Row Type)
  = Lit String
  | Var (ProxyKey String f)
  | Join (Array (FormatItem f))

lit = Lit
var x = Var (mkProxyKey x)

instance Semigroup (FormatItem f) where
  append x y = Join [ x, y ]

instance Monoid (FormatItem f) where
  mempty = Join []

-- =============================================================================

format :: forall r. Record r -> Format r -> String
format r =
  map
    ( case _ of
        Lit s -> s
        Var xk -> runProxyKey (\x -> Record.get x r) xk
        Join xs -> xs # map (format r <<< pure) # Array.fold
    )
    >>> Array.fold

example = x <> lit " world!"
  where
  x = var (Proxy :: Proxy "x")

