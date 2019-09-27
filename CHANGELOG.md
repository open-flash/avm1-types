# Next

- **[Breaking change]** Add `Error` raw action to represent invalid actions.

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
