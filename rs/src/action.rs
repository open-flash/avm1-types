use crate::helpers::{buffer_to_hex, hex_to_buffer};
use crate::{GetUrl2Method, PushValue};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ConstantPool {
  pub pool: Vec<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GetUrl {
  pub url: String,
  pub target: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GetUrl2 {
  pub method: GetUrl2Method,
  pub load_target: bool,
  pub load_variables: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GotoFrame {
  pub frame: usize,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GotoFrame2 {
  pub play: bool,
  pub scene_bias: usize,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GoToLabel {
  pub label: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Push {
  pub values: Vec<PushValue>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Raw {
  pub code: u8,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SetTarget {
  pub target_name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StoreRegister {
  pub register: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StrictMode {
  pub mode: u8,
}
