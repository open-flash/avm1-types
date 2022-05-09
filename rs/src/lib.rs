pub use self::push_value::PushValue;
#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};

#[macro_use]
mod bitflags;

pub mod action;
pub mod cfg;
pub mod error;
#[cfg(feature = "serde")]
mod helpers;
mod push_value;
pub mod raw;
mod swf_float;

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", content = "target", rename_all = "PascalCase")
)]
pub enum CatchTarget {
  Register(u8),
  Variable(String),
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
pub enum GetUrl2Method {
  None,
  Get,
  Post,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct Parameter {
  pub register: u8,
  pub name: String,
}

serde_bitflags! {
  pub struct FunctionFlags: u16 {
    #[serde(name = "preload_this")]
    const PRELOAD_THIS = 1 << 0;
    #[serde(name = "suppress_this")]
    const SUPPRESS_THIS = 1 << 1;
    #[serde(name = "preload_arguments")]
    const PRELOAD_ARGUMENTS = 1 << 2;
    #[serde(name = "suppress_arguments")]
    const SUPPRESS_ARGUMENTS = 1 << 3;
    #[serde(name = "preload_super")]
    const PRELOAD_SUPER = 1 << 4;
    #[serde(name = "suppress_super")]
    const SUPPRESS_SUPER = 1 << 5;
    #[serde(name = "preload_root")]
    const PRELOAD_ROOT = 1 << 6;
    #[serde(name = "preload_parent")]
    const PRELOAD_PARENT = 1 << 7;
    #[serde(name = "preload_global")]
    const PRELOAD_GLOBAL = 1 << 8;
  }
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct ActionHeader {
  pub code: u8,
  pub length: u16,
}

#[cfg(all(test, feature = "serde"))]
mod tests {
  use crate::cfg::Cfg;
  use std::path::Path;
  use test_generator::test_resources;

  #[test_resources("../tests/avm1/[!.]*/*/")]
  fn test_cfg(path: &str) {
    let path: &Path = Path::new(path);
    let name = path
      .components()
      .last()
      .unwrap()
      .as_os_str()
      .to_str()
      .expect("Failed to retrieve sample name");

    if name == "corrupted-push" || name == "try-jump-to-catch-throw-finally"
    // || name == "float32-trace"
    // || name == "float64-trace"
    {
      return;
    }

    let cfg_path = path.join("cfg.json");

    let value_json = ::std::fs::read_to_string(cfg_path).expect("Failed to read CFG file");

    let value: Cfg = serde_json_v8::from_str(&value_json).expect("Failed to read CFG");

    let output_json = serde_json_v8::to_string_pretty(&value).expect("Failed to write CFG");
    let output_json = format!("{}\n", output_json);

    assert_eq!(output_json, value_json)
  }
}

#[cfg(all(test, feature = "serde"))]
mod e2e_raw_tests {
  use crate::raw::Action;
  use test_generator::test_resources;

  #[test_resources("../tests/raw/*.json")]
  fn test_parse_action(path: &str) {
    let file = ::std::fs::File::open(path).unwrap();
    let reader = ::std::io::BufReader::new(file);
    // Check that we can parse the test case without issues
    serde_json_v8::from_reader::<_, Action>(reader).unwrap();
  }
}
