# Next

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
