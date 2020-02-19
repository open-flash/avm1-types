#[cfg(feature = "use-serde")]
use crate::helpers::{buffer_to_hex, hex_to_buffer};
use crate::{GetUrl2Method, PushValue};
#[cfg(feature = "use-serde")]
use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct ConstantPool {
  pub pool: Vec<String>,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct GetUrl {
  pub url: String,
  pub target: String,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct GetUrl2 {
  pub method: GetUrl2Method,
  pub load_target: bool,
  pub load_variables: bool,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct GotoFrame {
  pub frame: usize,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct GotoFrame2 {
  pub play: bool,
  pub scene_bias: usize,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct GoToLabel {
  pub label: String,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Push {
  pub values: Vec<PushValue>,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Raw {
  pub code: u8,
  #[cfg_attr(
    feature = "use-serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct SetTarget {
  pub target_name: String,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct StoreRegister {
  pub register: u8,
}

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct StrictMode {
  pub mode: u8,
}
