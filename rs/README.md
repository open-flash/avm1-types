# AVM1 Types (Rust)

[![GitHub repository](https://img.shields.io/badge/GitHub-open--flash%2Favm1--types-informational.svg)](https://github.com/open-flash/avm1-types)
<a href="https://crates.io/crates/avm1-types"><img src="https://img.shields.io/crates/v/avm1-types" alt="crates.io crate"/></a>
<a href="https://github.com/open-flash/avm1-types/actions/workflows/check-rs.yml"><img src="https://img.shields.io/github/workflow/status/open-flash/avm1-types/check-rs/main"  alt="Rust checks status"/></a>
<a href="https://docs.rs/avm1-types"><img src="https://img.shields.io/badge/docs.rs-avm1--types-informational" alt="docs.rs/avm1-types"></a>

Rust implementation of the AVM1 Abstract Syntax Tree (AST).

## Contributing

This repo uses Git submodules for its test samples:

```sh
# Clone with submodules
git clone --recurse-submodules git://github.com/open-flash/swf-parser.git
# Update submodules for an already-cloned repo
git submodule update --init --recursive --remote
```

This library is a standard Cargo project. You can test your changes with
`cargo test`.  **The commands must be run from the `rs` directory.**

Code formatting is checked using `rustfmt`:

```
# Make sure that you have `rustfmt`
rustup component add rustfmt
# Check formatting
cargo fmt --all -- --check
# Format automatically
cargo fmt --all
```

Prefer non-`master` branches when sending a PR so your changes can be rebased if
needed. All the commits must be made on top of `master` (fast-forward merge).
CI must pass for changes to be accepted.

[swf-tree]: https://github.com/open-flash/swf-tree
