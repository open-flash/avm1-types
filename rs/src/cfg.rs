pub use crate::action::*;
use crate::error::InvalidActionError;
use crate::{action, CatchTarget, Parameter};
#[cfg(feature = "use-serde")]
use serde::{Deserialize, Serialize};
use vec1::Vec1;

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Cfg {
  pub blocks: Vec1<CfgBlock>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct CfgBlock {
  pub label: CfgLabel,
  pub actions: Vec<Action>,
  pub flow: CfgFlow,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct CfgLabel(pub String);

/// Similar to `raw::Action` but no `End`, `Error , `Jump`, `If` `Throw`, `Return`,
/// `Try`, `WaitForFrame`, `WaitForFrame2` and `With`, also different
/// `DefineFunction` and `DefineFunction2`.
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(
  feature = "use-serde",
  derive(Serialize, Deserialize),
  serde(tag = "action", rename_all = "PascalCase")
)]
pub enum Action {
  Add,
  Add2,
  And,
  AsciiToChar,
  BitAnd,
  BitOr,
  BitLShift,
  BitRShift,
  BitURShift,
  BitXor,
  Call,
  CallFunction,
  CallMethod,
  CharToAscii,
  CastOp,
  CloneSprite,
  ConstantPool(action::ConstantPool),
  Decrement,
  DefineFunction(DefineFunction),
  DefineFunction2(DefineFunction2),
  DefineLocal,
  DefineLocal2,
  Delete,
  Delete2,
  Divide,
  EndDrag,
  Enumerate,
  Enumerate2,
  Equals,
  Equals2,
  Extends,
  FsCommand2,
  GetMember,
  GetProperty,
  GetTime,
  GetUrl(action::GetUrl),
  GetUrl2(action::GetUrl2),
  GetVariable,
  GotoFrame(action::GotoFrame),
  GotoFrame2(action::GotoFrame2),
  GotoLabel(action::GoToLabel),
  Greater,
  ImplementsOp,
  Increment,
  InitArray,
  InitObject,
  InstanceOf,
  Less,
  Less2,
  MbAsciiToChar,
  MbCharToAscii,
  MbStringExtract,
  MbStringLength,
  Modulo,
  Multiply,
  NewMethod,
  NewObject,
  NextFrame,
  Not,
  Or,
  Play,
  Pop,
  PrevFrame,
  Push(action::Push),
  PushDuplicate,
  RandomNumber,
  Raw(action::Raw),
  RemoveSprite,
  SetMember,
  SetProperty,
  SetTarget(action::SetTarget),
  SetTarget2,
  SetVariable,
  StackSwap,
  StartDrag,
  Stop,
  StopSounds,
  StoreRegister(action::StoreRegister),
  StrictEquals,
  StrictMode(action::StrictMode),
  StringAdd,
  StringEquals,
  StringExtract,
  StringGreater,
  StringLength,
  StringLess,
  Subtract,
  TargetPath,
  ToInteger,
  ToNumber,
  ToString,
  ToggleQuality,
  Trace,
  TypeOf,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct DefineFunction {
  pub name: String,
  pub parameters: Vec<String>,
  pub body: Cfg,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct DefineFunction2 {
  // Empty string if anonymous
  pub name: String,
  pub register_count: u8,
  pub preload_this: bool,
  pub suppress_this: bool,
  pub preload_arguments: bool,
  pub suppress_arguments: bool,
  pub preload_super: bool,
  pub suppress_super: bool,
  pub preload_root: bool,
  pub preload_parent: bool,
  pub preload_global: bool,
  pub parameters: Vec<Parameter>,
  pub body: Cfg,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(
  feature = "use-serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "PascalCase")
)]
pub enum CfgFlow {
  Error(Error),
  If(If),
  Return,
  Simple(Simple),
  Throw,
  Try(Try),
  WaitForFrame(WaitForFrame),
  WaitForFrame2(WaitForFrame2),
  With(With),
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Error {
  #[cfg_attr(feature = "use-serde", serde(skip_serializing_if = "Option::is_none"))]
  pub error: Option<InvalidActionError>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct If {
  pub true_target: Option<CfgLabel>,
  pub false_target: Option<CfgLabel>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Simple {
  pub next: Option<CfgLabel>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct CatchBlock {
  pub target: CatchTarget,
  pub body: Cfg,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct Try {
  pub r#try: Cfg,
  #[cfg_attr(feature = "use-serde", serde(skip_serializing_if = "Option::is_none"))]
  pub catch: Option<CatchBlock>,
  #[cfg_attr(feature = "use-serde", serde(skip_serializing_if = "Option::is_none"))]
  pub finally: Option<Cfg>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct WaitForFrame {
  pub frame: u16,
  pub ready_target: Option<CfgLabel>,
  pub loading_target: Option<CfgLabel>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct WaitForFrame2 {
  pub ready_target: Option<CfgLabel>,
  pub loading_target: Option<CfgLabel>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "use-serde", derive(Serialize, Deserialize))]
pub struct With {
  pub body: Cfg,
}
