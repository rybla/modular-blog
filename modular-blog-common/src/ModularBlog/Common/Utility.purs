module ModularBlog.Common.Utility where

import Prelude

import Control.Monad.Error.Class (class MonadThrow, throwError)
import Data.Maybe (Maybe, maybe)
import Partial.Unsafe (unsafeCrashWith)

todo :: forall a. String -> a
todo msg = unsafeCrashWith ("TODO: " <> msg)

fromJustE :: forall e m a. MonadThrow e m => e -> Maybe a -> m a
fromJustE e = maybe (throwError e) pure
