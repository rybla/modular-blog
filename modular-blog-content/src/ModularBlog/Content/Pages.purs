module ModularBlog.Content.Pages where

import ModularBlog.Common.Types (Page)
import ModularBlog.Content.Notes as Notes

pages :: Array Page
pages = [ pageLoremIpsum ]

-- =============================================================================

pageLoremIpsum :: Page
pageLoremIpsum =
  { name: "LoremIpsum"
  , static_content: "This is a placeholder for the page \"loremIpsum\"."
  , stylesheet_hrefs: []
  , note: Notes.loremIpsum
  }
