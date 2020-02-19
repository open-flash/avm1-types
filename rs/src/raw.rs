pub use crate::action::*;
use crate::error::InvalidActionError;
use crate::CatchTarget;
use crate::{action, Parameter};
use ::serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "action", rename_all = "kebab-case")]
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
  End,
  EndDrag,
  Enumerate,
  Enumerate2,
  Equals,
  Equals2,
  Error(Error),
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
  If(If),
  ImplementsOp,
  Increment,
  InitArray,
  InitObject,
  InstanceOf,
  Jump(Jump),
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
  Return,
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
  Throw,
  ToInteger,
  ToNumber,
  ToString,
  ToggleQuality,
  Trace,
  Try(Try),
  TypeOf,
  WaitForFrame(WaitForFrame),
  WaitForFrame2(WaitForFrame2),
  With(With),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFunction {
  // Empty string if anonymous
  pub name: String,
  pub parameters: Vec<String>,
  pub body_size: u16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
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
  pub body_size: u16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Error {
  #[serde(skip_serializing_if = "Option::is_none")]
  pub error: Option<InvalidActionError>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct If {
  pub offset: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Jump {
  pub offset: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CatchBlock {
  pub target: CatchTarget,
  pub size: u16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Try {
  pub r#try: u16,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub catch: Option<CatchBlock>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub finally: Option<u16>,
}

// Action code 0x8a
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct WaitForFrame {
  pub frame: u16,
  pub skip: usize,
}

// Action code 0x8d
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct WaitForFrame2 {
  pub skip: usize,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct With {
  pub size: u16,
}
