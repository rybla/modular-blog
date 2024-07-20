module ModularBlog.App.Common.RunPage where

import Prelude

import Effect (Effect)
import Halogen.Aff (awaitBody, runHalogenAff)
import Halogen.VDom.Driver (runUI)
import ModularBlog.Common.Rendering (component_Page)
import ModularBlog.Common.Types (Page)

runPage :: Page -> Effect Unit
runPage page = runHalogenAff (runUI component_Page { page } =<< awaitBody)
