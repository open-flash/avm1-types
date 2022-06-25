<a href="https://github.com/open-flash/open-flash">
    <img src="https://raw.githubusercontent.com/open-flash/open-flash/master/logo.png"
    alt="Open Flash logo" title="Open Flash" align="right" width="64" height="64" />
</a>

# AVM1 Types

[![npm](https://img.shields.io/npm/v/avm1-types.svg)](https://www.npmjs.com/package/avm1-types)
[![crates.io](https://img.shields.io/crates/v/avm1-types.svg)](https://crates.io/crates/avm1-types)
[![GitHub repository](https://img.shields.io/badge/Github-open--flash%2Favm1--types-blue.svg)](https://github.com/open-flash/avm1-types)
[![Build status](https://img.shields.io/travis/com/open-flash/avm1-types/master.svg)](https://travis-ci.com/open-flash/avm1-types)

AVM1 type definitions for Rust and Typescript (Node and browser).
Provides types to represent the static structure of Actionscript Virtual Machine 1 (AVM1) data.

<table>
<thead>
  <tr>
    <th>Implementation</th>
    <th>Package</th>
    <th>Checks</th>
    <th>Documentation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <a href="./rs/README.md">Rust</a>
    </td>
    <td>
      <a href="https://crates.io/crates/avm1-types"><img src="https://img.shields.io/crates/v/avm1-types" alt="crates.io crate"/></a>
    </td>
    <td>
      <a href="https://github.com/open-flash/avm1-types/actions/workflows/check-rs.yml"><img src="https://img.shields.io/github/workflow/status/open-flash/avm1-types/check-rs/main"  alt="Rust checks status"/></a>
    </td>
    <td>
      <a href="https://docs.rs/avm1-types"><img src="https://img.shields.io/badge/docs.rs-avm1--types-informational" alt="docs.rs/avm1-types"></a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="./ts/README.md">TypeScript</a>
    </td>
    <td>
      <a href="https://www.npmjs.com/package/avm1-types"><img src="https://img.shields.io/npm/v/avm1-types" alt="npm package"/></a>
    </td>
    <td>
      <a href="https://github.com/open-flash/avm1-types/actions/workflows/check-ts.yml"><img src="https://img.shields.io/github/workflow/status/open-flash/avm1-types/check-ts/main"  alt="TypeScript checks status"/></a>
    </td>
    <td>
      <a href="./ts/src/lib">Source Code ¯\_(ツ)_/¯</a>
    </td>
  </tr>
</tbody>
</table>

This library is part of the [Open Flash][ofl] project.

## Usage

- [Rust](./rs/README.md#usage)
- [Typescript](./ts/README.md#usage)

## Goal

The goal of this library is to provide a low-level abstract representation of
AVM1 structure. The code structure is the Control Flow Graph (CFG), a structure
representing the AVM1 actions and jumps between branches as a graph.

It also provides an even lower representation for raw actions using byte offsets
for the jumps.

## Status

This library is complete. It should be stable, but more real-life usage and
feedback is expected before releasing the version `1.0.0`.

The library is lacking documentation. It should be fixed before the release
`1.0.0`.

The library API should not change unless new undocumented actions are discovered
or issues in the API are found.

## Contributing

- [Rust](./rs/README.md#contributing)
- [Typescript](./ts/README.md#contributing)

You can also use the library and report any issues you encounter on the Github
issues page.

[ofl]: https://github.com/open-flash/open-flash
[swf-tree]: https://github.com/open-flash/swf-tree
