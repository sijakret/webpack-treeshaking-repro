# About

A few tests on what webpack can tree shake

`cases` folder contains a few entry points that import things from their `library` folder.

All cases are built with 2 different webpack configs.
> Note: right now the configs are identical except for the modules.rules settings in `webpack.config.2.js` that don't seem to have any effect.

# Observations

* `cases/simple` tree shaking works as expected
* `cases/simple-with-cjs` is exactly the same as `cases/simple`, but library includes a commonjs module `'object-hash'` instead of a simple es6 module. Even though it is never referenced it is still included.
  * Seems like webpack assumes the module produces side effects
  * how can i tell it that's not the case?
* `cases/simple-with-asm` same as for case above - even though the asm module is never referenced it is included in the bundle

# Install & Build

```bash
npm install
npm run build
```


