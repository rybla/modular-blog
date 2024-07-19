module ModularBlog.Lib.Mucode where

import Prelude

import Control.Monad.Error.Class (throwError)
import Data.Array as Array
import Data.Either.Nested (type (\/))
import Data.Generic.Rep (class Generic, Argument(..), Constructor(..), NoArguments(..), NoConstructors, Product(..), Sum(..), from, to)
import Data.List (List(..))
import Data.String as String
import Data.String.CodePoints (codePointFromChar)
import Parsing (ParseError(..), Parser, position, runParser)
import Parsing.Combinators (choice, try, (<|>))
import Parsing.String (anyCodePoint, char, string)
import Partial.Unsafe (unsafeCrashWith)

-- =============================================================================

class Encode a where
  encode :: a -> String

class Decode a where
  parse :: Unit -> Parser String a

decode :: forall a. Decode a => String -> ParseError \/ a
decode s = runParser s (parse unit)

-- =============================================================================
-- standard instances
-- =============================================================================

instance Encode String where
  encode s_ = s_ # show >>> trim 1 >>> (_ <> "\"")
    where
    trim n s = s # String.take (String.length s - n) # String.drop n

instance Decode String where
  parse _ = go unit <#> Array.fromFoldable >>> String.fromCodePointArray
    where
    doublequote_codepoint = '"' # codePointFromChar
    go _ = choice
      [ try do
          -- end string at: "
          char '"' # void
          pure Nil
      , try do
          -- escape: \" ~> "
          string "\\\"" # void
          Cons doublequote_codepoint <$> go unit
      , do
          -- everything else is parsed verbatim
          Cons <$> anyCodePoint <*> go unit
      ]

instance Encode Void where
  encode = absurd

instance Decode Void where
  parse _ = do
    pos <- position
    throwError (ParseError "cannot parse a term of type Void since no such term exists" pos)

instance Encode a => Encode (List a) where
  encode = case _ of
    Nil -> generic_encode' (Constructor NoArguments :: Constructor "Nil" _)
    Cons h t -> generic_encode' (Constructor (Product (Argument h) (Argument t)) :: Constructor "Cons" _)

instance Decode a => Decode (List a) where
  parse _ = (generic_parse' unit :: Parser String (Sum (Constructor "Nil" NoArguments) (Constructor "Cons" (Product (Argument a) (Argument (List a)))))) >>= case _ of
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
  generic_parse' :: Unit -> Parser String a

class Generic_DecodeArgs a where
  generic_parseArgs :: Unit -> Parser String a

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

generic_parse :: forall a rep. Generic a rep => Generic_Decode rep => Unit -> Parser String a
generic_parse x = generic_parse' x <#> to
