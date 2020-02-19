pub use self::push_value::PushValue;
#[cfg(feature = "use-serde")]
use serde::{Deserialize, Serialize};
pub mod action;
pub mod cfg;
pub mod error;
mod float_is;
#[cfg(feature = "use-serde")]
mod helpers;
mod push_value;
pub mod raw;

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(
  feature = "use-serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", content = "target", rename_all = "kebab-case")
)]
pub enum CatchTarget {
  Register(u8),
  Variable(String),
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(
  feature = "use-serde",
  derive(Serialize, Deserialize),
  serde(rename_all = "kebab-case")
)]
pub enum GetUrl2Method {
  None,
  Get,
  Post,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Parameter {
  pub register: u8,
  pub name: String,
}

#[cfg(all(test, feature = "use-serde"))]
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

    if name == "corrupted-push" || name == "try-jump-to-catch-throw-finally" {
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

#[cfg(all(test, feature = "use-serde"))]
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
