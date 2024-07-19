# modular-blog

```sh
bun run build
bun run serve
```

## Organization

Dependencies:
- modular-blog-common
- modular-blog-content <- modular-blog-common
- modular-blog-generate <- modular-blog-common, modular-blog-content
- modular-blog-app <- modular-blog-common

The package `modular-blog-common` contains all code shared among the other
packages. In particular, `modular-blog-common` defines the types `Page` and
`Note`, and the functions for operating with them e.g. rendering.

The `modular-blog-content` package contains all the actual content that will
appear in the blog. In particular, `modular-blog-content` has all the
pre-defined `Note`s and all the `Page`s that will become HTML endpoints.

The `modular-blog-app` package contains the application code.

The `modular-blog-gen` package contains runnable modules for generating and
bundling Purescript files in `modular-blog-app`.
  - runnable module `GenerateEndpoints` that for each `Page` in `content`:
    - import the `Page`
    - generate a runnable module in `app` of the same name
  - runnable module `BundleApp` that for each `Page` in `content`:
    - use spago to bundle the runnable module of the `Page` in
      `modular-blog-app` to the appropriate location in `docs/`
    - generate the directory and HTML file in `docs/` as well
