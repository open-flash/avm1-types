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
