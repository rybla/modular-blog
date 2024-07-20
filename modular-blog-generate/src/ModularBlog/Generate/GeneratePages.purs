module ModularBlog.Generate.GeneratePages where

import Prelude

import Data.Foldable (traverse_)
import Data.String as String
import Effect (Effect)
import Effect.Class.Console as Console
import ModularBlog.Common.Data.String.SimpleFormat as Format
import ModularBlog.Content.Pages (pages)
import ModularBlog.Generate.Utilities (writeTextFile)
import Node.ChildProcess as CP
import Node.FS.Sync as FS

main :: Effect Unit
main = do
  let
    page_module_dir = "./modular-blog-app/src/ModularBlog/App/Pages/"
    public_dir = "./docs/"

    page_constants page =
      let
        page_module_name = "Page" <> page.name
        page_public_dir = public_dir <> page.name <> "/"
      in
        { page_module_name
        , page_module_fullname: "ModularBlog.App.Pages." <> page_module_name
        , page_value_name: "page" <> page.name
        , page_public_dir
        , page_main_js_file: page_public_dir <> "main.js"
        }

  pages # traverse_ \page -> do
    let
      { page_module_name
      , page_module_fullname
      , page_value_name
      , page_public_dir
      } = page # page_constants

    -- generate a module in package `modular-blog-app`
    writeTextFile (page_module_dir <> page_module_name <> ".purs")
      ( """
module {{page_module_fullname}} where

import Prelude

import Effect (Effect)
import ModularBlog.App.Common.RunPage (runPage)
import ModularBlog.Content.Pages ({{page_value_name}})

main :: Effect Unit
main = runPage {{page_value_name}}
        """
          # String.trim
          # Format.format
              { page_module_fullname
              , page_value_name
              }
      )
    -- generate an index.html in `docs/`
    unlessM (FS.exists page_public_dir) do
      FS.mkdir page_public_dir
    writeTextFile (page_public_dir <> "index.html")
      ( """
<!DOCTYPE html>
<html lang="en">

<body>
  <div id="static_content">{{static_content}}</div>
</body>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{page_name}}</title>
  {{stylesheet_links}}
  <script src="main.js"></script>
</head>

</html>
        """
          # String.trim
          # Format.format
              { page_name: page.name
              , static_content: page.static_content
              , stylesheet_links:
                  page.stylesheet_hrefs
                    # map (\href -> """<link rel="stylesheet" href="{href}">""" # Format.format { href })
                    # String.joinWith "\n  "
              }
      )
    pure unit

  -- finally, after generating all the pages Purescript modules and `index.html`s,
  -- we can bundle the generated Purescript modules
  pages # traverse_ \page -> do
    let
      { page_module_fullname
      , page_main_js_file
      } = page # page_constants

    let
      cmd = "bun spago bundle -p modular-blog-app --module {{page_module_fullname}} --outfile ../{{page_main_js_file}} --bundle-type app"
        # Format.format
            { page_module_fullname
            , page_main_js_file
            }
    Console.log $ "cmd = " <> cmd 
    cmd
      # CP.execSync
      # void
    pure unit

