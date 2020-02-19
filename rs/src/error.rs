#[cfg(feature = "use-serde")]
use serde::{Deserialize, Serialize};

#[derive(Debug, PartialEq, Eq)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct InvalidActionError {
  pub message: String,
}
