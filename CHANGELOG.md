# Next

- **[Internal]** Migrate from Travis CI to GitHub Actions.

## Rust

- **[Breaking change]** Require Rust `1.60.0`.
- **[Breaking change]** Rename the feature `use-serde` to `serde`.
- **[Breaking change]** Replace `DefineFunction2`'s boolean flags by a bitflag.
- **[Fix]** Update dependencies.

# Typescript

- **[Breaking change]** Update to `kryo@0.14`.
- **[Breaking change]** Compile to `.mjs`.
- **[Fix]** Update dependencies.
- **[Internal]** Use Yarn's Plug'n'Play linker.

# 0.13.0 (2021-07-24)

## Rust

- **[Fix]** Update dependencies.
- **[Internal]** Add support for Clippy.

## Typescript

- **[Breaking change]** Update to `kryo@0.13`.
- **[Breaking change]** Drop `lib` prefix and `.js` extension from deep-imports.
- **[Fix]** Update dependencies.

# 0.12.0 (2021-05-05)

- **[Feature]** Add support for the `StrictMode` action.

## Rust

- **[Breaking change]** Use `u16` for `GotoFrame` and `GotoFrame2` body.
- **[Feature]** Implement `Clone`, `Ord` and `Hash` for all types.
- **[Feature]** Implement `TryFrom` to convert from a CFG action to a raw action.
- **[Feature]** Expose `ActionHeader` type.
- **[Fix]** Fix JSON serialization for floating-point push values.

## TypeScript

- **[Fix]** Update to Yarn 2.

# 0.11.0 (2020-09-07)

- **[Breaking change]** Use `PascalCase` for enums and types.

## Rust

- **[Fix]** Update dependencies

## TypeScript

- **[Breaking change]** Update to native ESM.
- **[Fix]** Fix CFG `Action` type.
- **[Internal]** Switch from `tslint` to `eslint`.

# 0.10.0 (2020-02-19)

- **[Breaking change]** Refactor types to better separate `raw` from `cfg` types.
- **[Breaking change]** Rename `Value` to `PushValue`.
- **[Breaking change]** Revert to using lists for `Cfg` content.

## Rust

- **[Feature]** Make `serde` optional (enabled by default).
- **[Fix]** Add missing `StrictMode` raw action.
- **[Fix]** Drop unused `serde_json` dependency.

## Typescript

- **[Fix]** Fix Typedoc title.

# 0.9.0 (2019-09-27)

- **[Breaking change]** Rename to `avm1-types` (from `avm1-tree`).
- **[Breaking change]** Add `Error` raw action to represent invalid actions.
- **[Breaking change]** Add `End` raw action.
- **[Breaking change]** Update `Cfg` representation to ensure it is non-empty.
- **[Feature]** Add error information to `CfgErrorBlock`.

## Typescript

- **[Fix]** Add `data` field to `Unknown` raw actions.
- **[Fix]** Remove `readonly` modifier.

# 0.8.0 (2019-09-24)

- **[Breaking change]** Use CFG blocks instead of actions for `CfgIf`, `WaitForFrame` and `WaitForFrame2`.
- **[Internal]** Update dependencies.

## Rust

- **[Fix]** Remove unused functions `option_buffer_to_hex` and `option_hex_to_buffer`.
- **[Fix]** Drop `serde_derive` dependency in favor of `serde` feature.

# 0.7.0 (2019-07-16)

- **[Breaking change]** Refactor CFG nodes. This is a large change to enable the proper representation of `try` and `with` actions as CFG nodes. The `try`, `with`, `return`, `throw` and `jump` actions are no longer available as CFG actions and a replaced by dedicated block types. `End` and `Simple` CFG block types were unified: a `null` represents the end of the current stack frame.

# 0.6.0 (2019-07-11)

- **[Breaking change]** Replace code bytes with code sizes for raw actions defining code blocks (`DefineFunction`, `DefineFunction2`, `Try`, `With`)

# 0.5.0 (2019-07-08)

- **[Breaking change]** Add types to CFG blocks.
- **[Internal]** Switch to `travis.com` for CI.

### Rust

- **[Fix]** Rename `send_vars_method` to `method` in `GetUrl2`.
- **[Internal]** Add `rustfmt` support.

# 0.4.0 (2019-05-20)

- **[Internal]** Refactor project structure.
- **[Internal]** Add `CHANGELOG.md`.

### Rust

- **[Breaking change]** Rename `register_count` to `register` in `StoreRegister`.
