use super::float_is::Is;
#[cfg(feature = "use-serde")]
use serde::{Deserialize, Serialize};

#[derive(Debug)]
#[cfg_attr(
  feature = "use-serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", content = "value", rename_all = "PascalCase")
)]
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

impl ::std::cmp::PartialEq for PushValue {
  fn eq(&self, other: &Self) -> bool {
    match (self, other) {
      (&PushValue::Boolean(left), &PushValue::Boolean(right)) => left == right,
      (&PushValue::Constant(left), &PushValue::Constant(right)) => left == right,
      (&PushValue::Float32(left), &PushValue::Float32(right)) => left.is(&right),
      (&PushValue::Float64(left), &PushValue::Float64(right)) => left.is(&right),
      (&PushValue::Null, &PushValue::Null) => true,
      (&PushValue::Register(left), &PushValue::Register(right)) => left == right,
      (&PushValue::Sint32(left), &PushValue::Sint32(right)) => left == right,
      (&PushValue::String(ref left), &PushValue::String(ref right)) => left == right,
      (&PushValue::Undefined, &PushValue::Undefined) => true,
      _ => false,
    }
  }

  fn ne(&self, other: &Self) -> bool {
    !self.eq(other)
  }
}

impl ::std::cmp::Eq for PushValue {}

#[cfg(test)]
mod tests {
  use super::*;
  #[cfg(feature = "use-serde")]
  use ::test_generator::test_resources;

  #[test]
  fn test_eq() {
    assert_eq!(PushValue::Boolean(false), PushValue::Boolean(false));
    assert_eq!(PushValue::Constant(0), PushValue::Constant(0));
    assert_eq!(PushValue::Float32(0.0), PushValue::Float32(0.0));
    assert_eq!(PushValue::Float32(::std::f32::NAN), PushValue::Float32(::std::f32::NAN));
    assert_eq!(PushValue::Float64(0.0), PushValue::Float64(0.0));
    assert_eq!(PushValue::Float64(::std::f64::NAN), PushValue::Float64(::std::f64::NAN));
    assert_eq!(PushValue::Null, PushValue::Null);
    assert_eq!(PushValue::Register(0), PushValue::Register(0));
    assert_eq!(PushValue::Sint32(0), PushValue::Sint32(0));
    assert_eq!(PushValue::String(String::new()), PushValue::String(String::new()));
    assert_eq!(PushValue::Undefined, PushValue::Undefined);
  }

  #[cfg(feature = "use-serde")]
  #[test_resources("../tests/*.json")]
  fn test_parse_json(path: &str) {
    let file = ::std::fs::File::open(path).unwrap();
    let reader = ::std::io::BufReader::new(file);
    // Check that we can parse the test case without issues
    serde_json_v8::from_reader::<_, PushValue>(reader).unwrap();
  }
}
