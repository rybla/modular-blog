# modular-blog

```sh
bun run build
bun run serve
```

## Organization

Dependencies:
- lib
- content <- lib
- gen <- lib, content
- app <- lib

The package `lib` contains all code shared among the other packages. In
particular, `lib` defines the types `Page` and `Note`, and the functions for
operating with them e.g. rendering.

The `content` package contains all the actual content that will appear in the
blog. In particular, `content` has all the pre-defined `Note`s and all the
`Page`s that will become HTML endpoints.

The `app` package contains the application code.

The `gen` package contains runnable modules for generating and bundling
Purescript files in `app`.
  - runnable module `GenerateEndpoints` that for each `Page` in `content`:
    - import the `Page`
    - generate a runnable module in `app` of the same name
  - runnable module `BundleApp` that for each `Page` in `content`:
    - use spago to bundle the runnable module of the `Page` in `app` to the
      appropriate location in `docs/`
    - generate the directory and HTML file in `docs/` as well
