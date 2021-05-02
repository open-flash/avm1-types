use ordered_float::OrderedFloat;

#[derive(Copy, Clone, Debug, Default)]
#[repr(transparent)]
pub(crate) struct SwfFloat<T>(OrderedFloat<T>);

// TODO: Move the custom serialization logic to the Serializer and Deserializer itself

macro_rules! swf_float_impl {
  ($fty: ident) => {
    impl From<$fty> for SwfFloat<$fty> {
      fn from(x: $fty) -> Self {
        Self(OrderedFloat::from(x))
      }
    }

    impl From<SwfFloat<$fty>> for $fty {
      fn from(x: SwfFloat<$fty>) -> Self {
        x.0.into()
      }
    }

    impl ::std::cmp::PartialEq for SwfFloat<$fty> {
      fn eq(&self, other: &Self) -> bool {
        self.0.eq(&other.0)
      }
    }

    impl ::std::cmp::Eq for SwfFloat<$fty> {}

    impl ::std::cmp::PartialOrd for SwfFloat<$fty> {
      fn partial_cmp(&self, other: &Self) -> Option<::std::cmp::Ordering> {
        self.0.partial_cmp(&other.0)
      }
    }

    impl ::std::cmp::Ord for SwfFloat<$fty> {
      fn cmp(&self, other: &Self) -> ::std::cmp::Ordering {
        self.0.cmp(&other.0)
      }
    }

    impl ::std::hash::Hash for SwfFloat<$fty> {
      fn hash<H: ::std::hash::Hasher>(&self, state: &mut H) {
        self.0.hash(state)
      }
    }

    #[cfg(feature = "use-serde")]
    impl ::serde::ser::Serialize for SwfFloat<$fty> {
      fn serialize<S>(
        &self,
        serializer: S,
      ) -> Result<<S as serde::ser::Serializer>::Ok, <S as serde::ser::Serializer>::Error>
      where
        S: serde::ser::Serializer,
      {
        use ::std::num::FpCategory;
        let inner: $fty = (*self).into();
        match inner.classify() {
          FpCategory::Nan => "NaN".serialize(serializer),
          FpCategory::Infinite if inner.is_sign_positive() => "+Infinity".serialize(serializer),
          FpCategory::Infinite => "-Infinity".serialize(serializer),
          FpCategory::Zero if inner.is_sign_negative() => "-0".serialize(serializer),
          _ => inner.serialize(serializer),
        }
      }
    }

    #[cfg(feature = "use-serde")]
    impl<'de> ::serde::de::Deserialize<'de> for SwfFloat<$fty> {
      fn deserialize<D>(deserializer: D) -> Result<Self, <D as serde::Deserializer<'de>>::Error>
      where
        D: serde::Deserializer<'de>,
      {
        struct SwfFloatVisitor;

        impl<'de> serde::de::Visitor<'de> for SwfFloatVisitor {
          type Value = SwfFloat<$fty>;

          fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
            formatter.write_str(stringify!($fty))
          }

          fn visit_f32<E>(self, value: f32) -> Result<Self::Value, E>
          where
            E: serde::de::Error,
          {
            Ok(SwfFloat::from(value as $fty))
          }

          fn visit_f64<E>(self, value: f64) -> Result<Self::Value, E>
          where
            E: serde::de::Error,
          {
            Ok(SwfFloat::from(value as $fty))
          }

          fn visit_u64<E>(self, value: u64) -> Result<Self::Value, E>
          where
            E: serde::de::Error,
          {
            Ok(SwfFloat::from(value as $fty))
          }

          fn visit_i64<E>(self, value: i64) -> Result<Self::Value, E>
          where
            E: serde::de::Error,
          {
            Ok(SwfFloat::from(value as $fty))
          }

          fn visit_str<E>(self, v: &str) -> Result<Self::Value, E>
          where
            E: serde::de::Error,
          {
            match v {
              "+Infinity" => Ok($fty::INFINITY.into()),
              "-Infinity" => Ok($fty::NEG_INFINITY.into()),
              "NaN" => Ok($fty::NAN.into()),
              "-0" => Ok((1.0 / $fty::NEG_INFINITY).into()),
              _ => Err(serde::de::Error::invalid_type(serde::de::Unexpected::Str(v), &self)),
            }
          }
        }

        deserializer.deserialize_any(SwfFloatVisitor)
      }
    }
  };
}

swf_float_impl!(f32);
swf_float_impl!(f64);
