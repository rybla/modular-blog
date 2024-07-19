module ModularBlog.Lib.Rendering where

import Halogen
import ModularBlog.Lib.Types
import Prelude

import Control.Monad.State (evalState)
import Data.Foldable (fold)
import Data.Maybe (Maybe(..), maybe)
import Data.Newtype (over, unwrap)
import Data.Traversable (sequence)
import Effect.Aff (Aff, error, throwError)
import Halogen as H
import Halogen.HTML as HH
import Halogen.HTML.Properties as HP
import Web.DOM.Element as Web.DOM.Element
import Web.DOM.Node as Web.DOM.Node
import Web.DOM.NonElementParentNode as Web.DOM.NonElementParentNode
import Web.HTML as Web.HTML
import Web.HTML.HTMLDocument as Web.HTML.HTMLDocument
import Web.HTML.Window as Web.HTML.Window

-- =============================================================================
-- Page
-- =============================================================================

component_Page :: Component PageQuery PageInput PageOutput Aff
component_Page = mkComponent { initialState, eval, render }
  where
  initialState { page } =
    { page }

  eval = mkEval defaultEval { initialize = Just Initialize_PageAction, receive = Receive_PageAction >>> Just, handleAction = handleAction }

  handleAction = case _ of
    Initialize_PageAction -> do
      window <- Web.HTML.window # liftEffect
      document <- window # Web.HTML.Window.document # liftEffect
      placeholder <- document # getNodeById "placeholder" # liftEffect
      placeholder_parent <- document # getParentNodeOfNodeById "placeholder" # liftEffect
      _ <- placeholder_parent `Web.DOM.Node.removeChild` placeholder # liftEffect
      pure unit
    Receive_PageAction input -> put (initialState input)

  render { page } =
    HH.div
      []
      ( page.note
          # renderNote
          # flip evalState initialRenderNoteEnv
      )

getNodeById id =
  Web.HTML.HTMLDocument.toNonElementParentNode >>> pure
    >=> Web.DOM.NonElementParentNode.getElementById id
    >=> maybe (throwError (error ("element not found: #" <> id))) pure
    >=> Web.DOM.Element.toNode >>> pure

getParentNodeOfNodeById id =
  getNodeById id
    >=> Web.DOM.Node.parentNode
    >=> maybe (throwError (error ("no parent node of: #" <> id))) pure

-- =============================================================================
-- Note
-- =============================================================================

freshWidgetSlotId :: RenderM WidgetSlotId
freshWidgetSlotId = do
  { widgetSlotId } <- get
  modify_ _ { widgetSlotId = widgetSlotId # over WidgetSlotId (_ + 1) }
  pure widgetSlotId

renderNote :: forall extra. RenderNoteExtra extra => Note extra -> RenderM (Array NoteHTML)
renderNote = case _ of
  Literal str -> pure [ HH.span [ HP.class_ (H.ClassName "Literal") ] [ HH.text str ] ]
  Styled style note -> renderStyled style (note # renderNote)
  Grouped group notes -> renderGrouped group (notes # map renderNote # sequence # map fold)
  Inject a -> renderNoteInject a

renderStyled :: Style -> RenderM (Array NoteHTML) -> RenderM (Array NoteHTML)
renderStyled style m_hs =
  case style of
    _ -> use_css_class
  where
  use_css_class = do
    hs <- m_hs
    pure [ HH.div [ HP.class_ (H.ClassName (show style)) ] hs ]

renderGrouped :: Group -> RenderM (Array NoteHTML) -> RenderM (Array NoteHTML)
renderGrouped group m_hs =
  case group of
    _ -> use_css_class
  where
  use_css_class = do
    hs <- m_hs
    pure [ HH.div [ HP.class_ (H.ClassName (show group)) ] hs ]

class RenderNoteExtra a where
  renderNoteInject :: a -> RenderM (Array NoteHTML)

instance RenderNoteExtra Void where
  renderNoteInject = absurd

instance RenderNoteExtra RenderNoteHTML where
  renderNoteInject = unwrap
