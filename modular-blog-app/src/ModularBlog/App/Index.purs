module ModularBlog.App.Index where

import Prelude

import Data.Either (Either(..))
import Data.Either.Nested (type (\/))
import Data.Maybe (Maybe(..), fromMaybe)
import Effect (Effect)
import Effect.Aff (Aff)
import Effect.Class.Console as Console
import Effect.Exception (error)
import Halogen (defaultEval, mkComponent, mkEval)
import Halogen as H
import Halogen.Aff (awaitBody, runHalogenAff)
import Halogen.HTML as HH
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
data Action = Initialize

component :: H.Component Query Input Output Aff
component = mkComponent { initialState, eval, render }
  where
  initialState _ =
    { show_editor: false
    -- , mb_err_note: Nothing :: Maybe (String \/ PlainNote)
    , mb_err_note: Just (Right (Literal "hello world!")) :: Maybe (String \/ PlainNote)
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
          pure unit

  render state =
    HH.div
      [ HP.style "height: 100vh; display: flex; flex-direction: column" ]
      [ HH.div [] [ HH.text "toggle_editor_button" ]
      , HH.div [] [ HH.text "editor" ]
      -- , HH.div [] [ HH.text "link" ]
      , case state.mb_err_note of
          Nothing -> HH.div [] [ HH.text "no encoding" ]
          Just (Left _err) -> HH.div [] [ HH.text "no encoding" ]
          Just (Right note) -> HH.div [] [ HH.text (note # Mucode.encode # JSURI.encodeURIComponent # fromMaybe "failure when encoding URI component") ]
      , case state.mb_err_note of
          Nothing -> HH.div [] [ HH.text "<Nothing>" ]
          Just (Left err) -> HH.div [] [ HH.text err ]
          Just (Right note) -> HH.slot_ (Proxy :: Proxy "page") unit component_Page
            { page:
                { name: "dynamic"
                , static_content: ""
                , stylesheet_hrefs: []
                , note: note <#> absurd
                }
            }
      ]
