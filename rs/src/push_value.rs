use crate::swf_float::SwfFloat;
#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};
#[cfg(feature = "serde")]
use serde::{Deserializer, Serializer};
use std::cmp::Ordering;
use std::hash::Hasher;

#[derive(Clone, Debug)]
pub enum PushValue {
  Boolean(bool),
  Constant(u16),
  Float32(f32),
  Float64(f64),
  Null,
  Register(u8),
  Sint32(i32),
  String(String),
  Undefined,
}

#[cfg(feature = "serde")]
impl Serialize for PushValue {
  fn serialize<S>(&self, serializer: S) -> Result<<S as Serializer>::Ok, <S as Serializer>::Error>
  where
    S: Serializer,
  {
    PushValueImpl::from(self).serialize(serializer)
  }
}

#[cfg(feature = "serde")]
impl<'de> Deserialize<'de> for PushValue {
  fn deserialize<D>(deserializer: D) -> Result<Self, <D as Deserializer<'de>>::Error>
  where
    D: Deserializer<'de>,
  {
    OwnedPushValueImpl::deserialize(deserializer).map(PushValue::from)
  }
}

#[cfg(feature = "serde")]
#[derive(Deserialize)]
#[serde(tag = "type", content = "value", rename_all = "PascalCase")]
enum OwnedPushValueImpl {
  Boolean(bool),
  Constant(u16),
  Float32(SwfFloat<f32>),
  Float64(SwfFloat<f64>),
  Null,
  Register(u8),
  Sint32(i32),
  String(String),
  Undefined,
}

#[cfg(feature = "serde")]
impl From<OwnedPushValueImpl> for PushValue {
  fn from(value: OwnedPushValueImpl) -> Self {
    match value {
      OwnedPushValueImpl::Boolean(v) => PushValue::Boolean(v),
      OwnedPushValueImpl::Constant(v) => PushValue::Constant(v),
      OwnedPushValueImpl::Float32(v) => PushValue::Float32(v.into()),
      OwnedPushValueImpl::Float64(v) => PushValue::Float64(v.into()),
      OwnedPushValueImpl::Null => PushValue::Null,
      OwnedPushValueImpl::Register(v) => PushValue::Register(v),
      OwnedPushValueImpl::Sint32(v) => PushValue::Sint32(v),
      OwnedPushValueImpl::String(v) => PushValue::String(v),
      OwnedPushValueImpl::Undefined => PushValue::Undefined,
    }
  }
}

/// Used to derive PartialEq / Eq / PartialOrd / Ord / Hash implementations
/// by wrapping floating-point values.
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(
  feature = "serde",
  derive(Serialize),
  serde(tag = "type", content = "value", rename_all = "PascalCase")
)]
enum PushValueImpl<'a> {
  Boolean(bool),
  Constant(u16),
  Float32(SwfFloat<f32>),
  Float64(SwfFloat<f64>),
  Null,
  Register(u8),
  Sint32(i32),
  String(&'a str),
  Undefined,
}

impl<'a> From<&'a PushValue> for PushValueImpl<'a> {
  fn from(value: &'a PushValue) -> Self {
    match value {
      PushValue::Boolean(ref v) => PushValueImpl::Boolean(*v),
      PushValue::Constant(ref v) => PushValueImpl::Constant(*v),
      PushValue::Float32(ref v) => PushValueImpl::Float32(SwfFloat::from(*v)),
      PushValue::Float64(ref v) => PushValueImpl::Float64(SwfFloat::from(*v)),
      PushValue::Null => PushValueImpl::Null,
      PushValue::Register(ref v) => PushValueImpl::Register(*v),
      PushValue::Sint32(ref v) => PushValueImpl::Sint32(*v),
      PushValue::String(ref v) => PushValueImpl::String(v),
      PushValue::Undefined => PushValueImpl::Undefined,
    }
  }
}

impl ::std::cmp::PartialEq for PushValue {
  fn eq(&self, other: &Self) -> bool {
    PushValueImpl::from(self).eq(&PushValueImpl::from(other))
  }
}

impl ::std::cmp::Eq for PushValue {}

impl ::std::cmp::PartialOrd for PushValue {
  fn partial_cmp(&self, other: &Self) -> Option<Ordering> {
    PushValueImpl::from(self).partial_cmp(&PushValueImpl::from(other))
  }
}

impl ::std::cmp::Ord for PushValue {
  fn cmp(&self, other: &Self) -> Ordering {
    PushValueImpl::from(self).cmp(&PushValueImpl::from(other))
  }
}

impl ::std::hash::Hash for PushValue {
  fn hash<H: Hasher>(&self, state: &mut H) {
    PushValueImpl::from(self).hash(state)
  }
}

#[cfg(test)]
mod tests {
  use super::*;
  #[cfg(feature = "serde")]
  use ::test_generator::test_resources;

  #[allow(clippy::eq_op)]
  #[test]
  fn test_eq() {
    assert_eq!(PushValue::Boolean(false), PushValue::Boolean(false));
    assert_eq!(PushValue::Constant(0), PushValue::Constant(0));
    assert_eq!(PushValue::Float32(0.0), PushValue::Float32(0.0));
    assert_eq!(PushValue::Float32(f32::NAN), PushValue::Float32(f32::NAN));
    assert_eq!(PushValue::Float64(0.0), PushValue::Float64(0.0));
    assert_eq!(PushValue::Float64(f64::NAN), PushValue::Float64(f64::NAN));
    assert_eq!(PushValue::Null, PushValue::Null);
    assert_eq!(PushValue::Register(0), PushValue::Register(0));
    assert_eq!(PushValue::Sint32(0), PushValue::Sint32(0));
    assert_eq!(PushValue::String(String::new()), PushValue::String(String::new()));
    assert_eq!(PushValue::Undefined, PushValue::Undefined);
  }

  #[cfg(feature = "serde")]
  #[test_resources("../tests/*.json")]
  fn test_parse_json(path: &str) {
    let file = ::std::fs::File::open(path).unwrap();
    let reader = ::std::io::BufReader::new(file);
    // Check that we can parse the test case without issues
    serde_json_v8::from_reader::<_, PushValue>(reader).unwrap();
  }
}
