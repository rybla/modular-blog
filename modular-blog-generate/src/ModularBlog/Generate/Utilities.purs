module ModularBlog.Generate.Utilities where

import Prelude

import Effect (Effect)
import Effect.Class.Console as Console
import Node.Encoding (Encoding(..))
import Node.FS.Sync as FS

writeTextFile :: String -> String -> Effect Unit
writeTextFile filepath content = do
  FS.writeTextFile UTF8 filepath content
  Console.log $ "[modular-blog-generate] wrote file: " <> show filepath
