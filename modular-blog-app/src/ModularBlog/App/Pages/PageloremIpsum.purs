module ModularBlog.App.Pages.PageLoremIpsum where

import Prelude

import Effect (Effect)
import ModularBlog.App.Common.RunPage (runPage)
import ModularBlog.Content.Pages (pageLoremIpsum)

main :: Effect Unit
main = runPage pageLoremIpsum