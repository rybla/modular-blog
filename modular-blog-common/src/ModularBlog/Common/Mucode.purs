module ModularBlog.Common.Mucode where

import Prelude

import Control.Monad.Error.Class (throwError)
import Control.Monad.ST (ST)
import Control.Monad.ST as ST
import Control.Monad.Trans.Class (lift)
import Data.Array.ST as Array.ST
import Data.Either.Nested (type (\/))
import Data.Generic.Rep (class Generic, Argument(..), Constructor(..), NoArguments(..), NoConstructors, Product(..), Sum(..), from, to)
import Data.List (List(..))
import Data.Maybe (Maybe(..))
import Data.String as String
import Data.String.CodePoints (codePointFromChar)
import Parsing (ParseError(..), ParserT, position, runParserT)
import Parsing.Combinators ((<|>))
import Parsing.String (anyCodePoint, string)
import Partial.Unsafe (unsafeCrashWith)

-- =============================================================================

-- type Parser = ParserT String Effect
type Parser a = forall r. ParserT String (ST r) a

-- =============================================================================

class Encode a where
  encode :: a -> String

class Decode a where
  parse :: Unit -> Parser a

decode :: forall a. Decode a => String -> ParseError \/ a
decode s =
  let
    st_err_a :: forall r. ST r (ParseError \/ a)
    st_err_a = s # flip runParserT (parse unit :: Parser a)
  in
    ST.run st_err_a

-- =============================================================================
-- standard instances
-- =============================================================================

instance Encode String where
  encode s_ = s_ # show >>> trim 1 >>> (_ <> "\"")
    where
    trim n s = s # String.take (String.length s - n) # String.drop n

instance Decode String where
  parse _ = do
    cps <- Array.ST.new # lift
    let
      go = do
        cp1 <- anyCodePoint
        case unit of
          _ | cp1 == ('"' # codePointFromChar) -> pure unit
          _ | cp1 == ('\\' # codePointFromChar) -> do
            anyCodePoint >>= \cp2 -> cps # Array.ST.push cp2 # lift # void
            go
          _ -> do
            cps # Array.ST.push cp1 # lift # void
            go
    go
    cps' <- cps # Array.ST.unsafeFreeze # lift
    pure (cps' # String.fromCodePointArray)

instance Encode Void where
  encode = absurd

instance Decode Void where
  parse _ = do
    pos <- position
    throwError (ParseError "cannot parse a term of type Void since no such term exists" pos)

type Rep_Boolean = Sum Rep_false Rep_true
type Rep_false = Constructor "false" NoArguments
type Rep_true = Constructor "true" NoArguments

instance Encode Boolean where
  encode = case _ of
    false -> generic_encode' (Inl (Constructor NoArguments) :: Rep_Boolean)
    true -> generic_encode' (Inl (Constructor NoArguments) :: Rep_Boolean)

instance Decode Boolean where
  parse _ = (generic_parse' unit :: Parser Rep_Boolean) >>= case _ of
    Inl _false -> pure false
    Inr _true -> pure true

type Rep_Maybe a = Sum Rep_Nothing (Rep_Just a)
type Rep_Nothing = Constructor "Nothing" NoArguments
type Rep_Just a = Constructor "Just" (Argument a)

instance Encode a => Encode (Maybe a) where
  encode = case _ of
    Nothing -> generic_encode' (Inl (Constructor NoArguments) :: Rep_Maybe a)
    Just a -> generic_encode' (Inr (Constructor (Argument a)) :: Rep_Maybe a)

instance Decode a => Decode (Maybe a) where
  parse _ = (generic_parse' unit :: Parser (Rep_Maybe a)) >>= case _ of
    Inl _Nothing -> pure Nothing
    Inr (Constructor (Argument a)) -> pure (Just a)

type Rep_List a = Sum Rep_Nil (Rep_Cons a)
type Rep_Nil = Constructor "Nil" NoArguments
type Rep_Cons a = Constructor "Cons" (Product (Argument a) (Argument (List a)))

instance Encode a => Encode (List a) where
  encode = case _ of
    Nil -> generic_encode' (Inl (Constructor NoArguments) :: Rep_List a)
    Cons h t -> generic_encode' (Inr (Constructor (Product (Argument h) (Argument t))) :: Rep_List a)

instance Decode a => Decode (List a) where
  parse _ = (generic_parse' unit :: Parser (Rep_List a)) >>= case _ of
    Inl _nil -> pure Nil
    Inr (Constructor (Product (Argument h) (Argument t))) -> pure (Cons h t)

-- =============================================================================
-- Generic_Encode and Generic_Decode
-- =============================================================================

class Generic_Encode a where
  generic_encode' :: a -> String

class Generic_EncodeArgs a where
  generic_encodeArgs :: a -> String

class Generic_Decode a where
  generic_parse' :: Unit -> Parser a

class Generic_DecodeArgs a where
  generic_parseArgs :: Unit -> Parser a

instance Generic_Encode NoConstructors where
  generic_encode' x = generic_encode' x

instance Generic_Decode NoConstructors where
  generic_parse' x = generic_parse' x

instance Generic_EncodeArgs NoArguments where
  generic_encodeArgs _ = ""

instance Generic_DecodeArgs NoArguments where
  generic_parseArgs _ = pure NoArguments

instance (Generic_Encode a, Generic_Encode b) => Generic_Encode (Sum a b) where
  generic_encode' (Inl a) = "0" <> generic_encode' a
  generic_encode' (Inr b) = "1" <> generic_encode' b

instance (Generic_Decode a, Generic_Decode b) => Generic_Decode (Sum a b) where
  generic_parse' _ = do
    (string "0" <|> string "1") >>= case _ of
      "0" -> Inl <$> generic_parse' unit
      "1" -> Inr <$> generic_parse' unit
      _ -> unsafeCrashWith "impossible"

instance (Generic_EncodeArgs a, Generic_EncodeArgs b) => Generic_EncodeArgs (Product a b) where
  generic_encodeArgs (Product a b) = "0" <> generic_encodeArgs a <> "1" <> generic_encodeArgs b

instance (Generic_DecodeArgs a, Generic_DecodeArgs b) => Generic_DecodeArgs (Product a b) where
  generic_parseArgs _ = do
    _ <- string "0"
    a <- generic_parseArgs unit
    _ <- string "1"
    b <- generic_parseArgs unit
    pure (Product a b)

instance Generic_EncodeArgs a => Generic_Encode (Constructor name a) where
  generic_encode' (Constructor a) = generic_encodeArgs a

instance Generic_DecodeArgs a => Generic_Decode (Constructor name a) where
  generic_parse' _ = Constructor <$> generic_parseArgs unit

instance Encode a => Generic_EncodeArgs (Argument a) where
  generic_encodeArgs (Argument a) = encode a

instance Decode a => Generic_DecodeArgs (Argument a) where
  generic_parseArgs _ = Argument <$> parse unit

generic_encode :: forall a rep. Generic a rep => Generic_Encode rep => a -> String
generic_encode x = generic_encode' (from x)

generic_parse :: forall a rep. Generic a rep => Generic_Decode rep => Unit -> Parser a
generic_parse x = generic_parse' x <#> to
