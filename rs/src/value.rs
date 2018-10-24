use super::float_is::Is;

#[derive(Serialize, Deserialize, Debug)]
#[serde(tag = "type", content = "value", rename_all = "kebab-case")]
pub enum Value {
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

impl ::std::cmp::PartialEq for Value {
  fn eq(&self, other: &Self) -> bool {
    match (self, other) {
      (&Value::Boolean(left), &Value::Boolean(right)) => left == right,
      (&Value::Constant(left), &Value::Constant(right)) => left == right,
      (&Value::Float32(left), &Value::Float32(right)) => left.is(&right),
      (&Value::Float64(left), &Value::Float64(right)) => left.is(&right),
      (&Value::Null, &Value::Null) => true,
      (&Value::Register(left), &Value::Register(right)) => left == right,
      (&Value::Sint32(left), &Value::Sint32(right)) => left == right,
      (&Value::String(ref left), &Value::String(ref right)) => left == right,
      (&Value::Undefined, &Value::Undefined) => true,
      _ => false,
    }
  }

  fn ne(&self, other: &Self) -> bool {
    !self.eq(other)
  }
}

impl ::std::cmp::Eq for Value {}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_eq() {
    assert_eq!(Value::Boolean(false), Value::Boolean(false));
    assert_eq!(Value::Constant(0), Value::Constant(0));
    assert_eq!(Value::Float32(0.0), Value::Float32(0.0));
    assert_eq!(Value::Float64(0.0), Value::Float64(0.0));
    assert_eq!(Value::Null, Value::Null);
    assert_eq!(Value::Register(0), Value::Register(0));
    assert_eq!(Value::Sint32(0), Value::Sint32(0));
    assert_eq!(Value::String(String::new()), Value::String(String::new()));
    assert_eq!(Value::Undefined, Value::Undefined);
  }
}
