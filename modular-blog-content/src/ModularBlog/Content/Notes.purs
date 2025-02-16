module ModularBlog.Content.Notes where

import Data.List as List
import Data.Map (Map)
import Data.Map as Map
import Data.Tuple.Nested ((/\))
import ModularBlog.Common.Types (Group(..), HyperNote, Note(..))

-- =============================================================================

notes :: Map String HyperNote
notes = Map.fromFoldable
  [ "loremIpsum" /\ loremIpsum ]

-- =============================================================================

loremIpsum :: HyperNote
loremIpsum = Grouped Column
  ( List.fromFoldable
      [ Literal "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur a erat nam at lectus. Cursus vitae congue mauris rhoncus aenean vel. Semper quis lectus nulla at volutpat. Tortor id aliquet lectus proin nibh nisl condimentum id. Dignissim sodales ut eu sem integer vitae justo eget. Habitasse platea dictumst quisque sagittis purus. Aenean euismod elementum nisi quis. Nunc scelerisque viverra mauris in aliquam. Est velit egestas dui id ornare. Elit ullamcorper dignissim cras tincidunt lobortis. Risus feugiat in ante metus dictum at tempor. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Morbi tincidunt augue interdum velit euismod in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Porttitor rhoncus dolor purus non enim praesent. Velit euismod in pellentesque massa placerat duis ultricies lacus. Adipiscing tristique risus nec feugiat in fermentum."
      , Literal "Ut tellus elementum sagittis vitae et leo. Cursus mattis molestie a iaculis at erat pellentesque. Quam adipiscing vitae proin sagittis nisl rhoncus. Tempor id eu nisl nunc mi ipsum faucibus vitae. Vulputate eu scelerisque felis imperdiet proin. Aliquet nibh praesent tristique magna sit amet. Ac auctor augue mauris augue neque gravida. Libero justo laoreet sit amet cursus sit amet dictum. Cursus metus aliquam eleifend mi in. Velit laoreet id donec ultrices tincidunt arcu. Netus et malesuada fames ac turpis egestas. Sit amet dictum sit amet justo donec. Nunc non blandit massa enim nec. Leo integer malesuada nunc vel risus commodo viverra maecenas accumsan. Velit dignissim sodales ut eu sem. Dignissim suspendisse in est ante in."
      , Literal "Consectetur purus ut faucibus pulvinar elementum. Aenean et tortor at risus viverra adipiscing at. Neque vitae tempus quam pellentesque nec nam. Ac placerat vestibulum lectus mauris ultrices eros. Elementum eu facilisis sed odio morbi quis commodo odio. Sem viverra aliquet eget sit amet. Placerat vestibulum lectus mauris ultrices. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Id aliquet lectus proin nibh nisl condimentum id venenatis a."
      , Literal "Vestibulum sed arcu non odio euismod. Sed vulputate mi sit amet mauris commodo quis. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus. Ut consequat semper viverra nam. Tristique senectus et netus et malesuada fames ac turpis egestas. Aenean pharetra magna ac placerat vestibulum lectus mauris. Imperdiet sed euismod nisi porta lorem mollis aliquam. Posuere morbi leo urna molestie at elementum. Enim sed faucibus turpis in eu mi bibendum neque egestas. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nunc aliquet bibendum enim facilisis. Egestas erat imperdiet sed euismod. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper."
      , Literal "Proin libero nunc consequat interdum. Pretium quam vulputate dignissim suspendisse in est. Lorem sed risus ultricies tristique nulla aliquet enim. Ac placerat vestibulum lectus mauris. Ut aliquam purus sit amet luctus venenatis lectus. Eget mauris pharetra et ultrices neque ornare aenean euismod. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Tincidunt nunc pulvinar sapien et ligula. Quam quisque id diam vel quam elementum pulvinar etiam non. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Tellus orci ac auctor augue mauris augue. Tempus imperdiet nulla malesuada pellentesque. Vulputate dignissim suspendisse in est ante in nibh mauris. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Sed felis eget velit aliquet sagittis."
      ]
  )
