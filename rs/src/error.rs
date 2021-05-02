#[cfg(feature = "use-serde")]
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct InvalidActionError {
  pub message: String,
}
