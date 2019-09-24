# AVM1 Tree (Rust)

[![crates.io](https://img.shields.io/crates/v/avm1-tree.svg)](https://crates.io/crates/avm1-tree)
[![GitHub repository](https://img.shields.io/badge/Github-open--flash%2Favm1--tree-blue.svg)](https://github.com/open-flash/avm1-tree)
[![Build status](https://img.shields.io/travis/com/open-flash/avm1-tree/master.svg)](https://travis-ci.com/open-flash/avm1-tree)

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
