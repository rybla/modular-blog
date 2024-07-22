module ModularBlog.App.Index where

import Prelude

import Data.Array as Array
import Data.Either (Either(..))
import Data.Either.Nested (type (\/))
import Data.Lens.Record (prop)
import Data.Maybe (Maybe(..), fromMaybe)
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class.Console as Console
import Effect.Exception (error)
import Halogen (defaultEval, mkComponent, mkEval)
import Halogen as H
import Halogen.Aff (awaitBody, runHalogenAff)
import Halogen.HTML as HH
import Halogen.HTML.Events as HE
import Halogen.HTML.Properties as HP
import Halogen.VDom.Driver (runUI)
import JSURI as JSURI
import ModularBlog.Common.Mucode as Mucode
import ModularBlog.Common.Rendering (component_Page)
import ModularBlog.Common.Types (Note(..), PlainNote)
import ModularBlog.Common.Utility (fromJustE)
import Type.Prelude (Proxy(..))
import Web.HTML as Web.HTML
import Web.HTML.Location as Web.HTML.Location
import Web.HTML.Window as Web.HTML.Window
import Web.URL.URLSearchParams as Web.URL.URLSearchParams

main :: Effect Unit
main = runHalogenAff (runUI component {} =<< awaitBody)

data Query (a :: Type)

type Input = {}

type Output = Void

type State =
  { mb_show_editor :: Maybe Boolean
  , mb_err_note :: Maybe (String \/ PlainNote)
  }

_mb_show_editor = Proxy :: Proxy "mb_show_editor"
_mb_err_note = Proxy :: Proxy "mb_err_note"

data Action
  = Initialize
  | Modify_ShowEditor (Maybe Boolean -> Maybe Boolean)

component :: H.Component Query Input Output Aff
component = mkComponent { initialState, eval, render }
  where
  initialState :: Input -> State
  initialState _ =
    { mb_show_editor: Just false
    , mb_err_note: Just (Right (Literal "hello world!"))
    }

  eval = mkEval defaultEval { initialize = Just Initialize, handleAction = handleAction }

  handleAction = case _ of
    Initialize -> do
      window <- Web.HTML.window # H.liftEffect
      location <- window # Web.HTML.Window.location # H.liftEffect
      search <- location # Web.HTML.Location.search # H.liftEffect
      usp <- Web.URL.URLSearchParams.fromString search # pure
      usp # Web.URL.URLSearchParams.get "content" # case _ of
        Nothing -> pure unit
        Just content_string_ -> do
          content_string <- content_string_ # JSURI.decodeURIComponent # fromJustE (error "failed to decodeURIComponent")
          Console.log ("content_string: " <> content_string)
          case Mucode.decode content_string of
            Left err -> do
              Console.log "failure when decoding ?content value"
              H.modify_ _ { mb_err_note = Just (Left (show err)) }
            Right note -> do
              Console.log "success when decoding ?content value"
              H.modify_ _ { mb_err_note = Just (Right note) }
      usp # Web.URL.URLSearchParams.get "mode" # case _ of
        Just "publish" -> H.modify_ _ { mb_show_editor = Nothing }
        Just "draft" -> H.modify_ _ { mb_show_editor = Just false }
        _ -> pure unit
    Modify_ShowEditor f -> H.modify_ (prop _mb_show_editor f)

  render { mb_show_editor, mb_err_note } =
    HH.div
      [ HP.style "height: 100vh; display: flex; flex-direction: column" ]
      ( [ [ HH.div
              []
              [ case mb_err_note of
                  Nothing -> HH.text "no encoding"
                  Just (Left _err) -> HH.text "no encoding"
                  Just (Right note) ->
                    let
                      note_enc = note # Mucode.encode
                    in
                      HH.a [ HP.href ("/?content=" <> (note_enc # JSURI.encodeURIComponent # fromMaybe "failure when encoding URI component")) ] [ HH.text note_enc ]
              ]
          ]

        , case mb_show_editor of
            Nothing -> []
            Just show_editor ->
              [ HH.div []
                  [ HH.button [ HE.onClick (const (Modify_ShowEditor (map not))) ] [ HH.text (if show_editor then "hide editor" else "show editor") ]
                  ]
              , HH.div [ HP.style (if show_editor then "" else "display: none; ") ]
                  [ HH.text "editor"
                  ]
              ]

        , case mb_err_note of
            Nothing -> []
            Just (Left err) -> [ HH.div [] [ HH.text err ] ]
            Just (Right note) ->
              [ HH.slot_ (Proxy :: Proxy "page") unit component_Page
                  { page:
                      { name: "dynamic"
                      , static_content: ""
                      , stylesheet_hrefs: []
                      , note: note <#> absurd
                      }
                  }
              ]
        ] # Array.fold
      )
