pub use crate::action::*;
use crate::error::InvalidActionError;
use crate::CatchTarget;
use crate::{action, FunctionFlags, Parameter};
#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};
use static_assertions::const_assert;
use std::convert::TryFrom;

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(
  feature = "serde",
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
  DefineFunction(Box<DefineFunction>),
  DefineFunction2(Box<DefineFunction2>),
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
  GetUrl(Box<action::GetUrl>),
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
  Raw(Box<action::Raw>),
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

  // These variants aren't present in `cfg::Action`; keep them at the end
  // so that the discriminants of the shared variants match.
  End,
  Jump(Jump),
  If(If),
  Throw,
  Return,
  Try(Box<Try>),
  WaitForFrame(WaitForFrame),
  WaitForFrame2(WaitForFrame2),
  With(With),
  Error(Error),
}

const_assert!(std::mem::size_of::<Action>() <= 32);

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "action", rename_all = "PascalCase")
)]
pub enum FromCfgActionError {
  DefineFunction(Box<crate::cfg::DefineFunction>),
  DefineFunction2(Box<crate::cfg::DefineFunction2>),
}

impl TryFrom<crate::cfg::Action> for Action {
  type Error = FromCfgActionError;

  fn try_from(value: crate::cfg::Action) -> Result<Self, FromCfgActionError> {
    match value {
      crate::cfg::Action::Add => Ok(Self::Add),
      crate::cfg::Action::Add2 => Ok(Self::Add2),
      crate::cfg::Action::And => Ok(Self::And),
      crate::cfg::Action::AsciiToChar => Ok(Self::AsciiToChar),
      crate::cfg::Action::BitAnd => Ok(Self::BitAnd),
      crate::cfg::Action::BitOr => Ok(Self::BitOr),
      crate::cfg::Action::BitLShift => Ok(Self::BitLShift),
      crate::cfg::Action::BitRShift => Ok(Self::BitRShift),
      crate::cfg::Action::BitURShift => Ok(Self::BitURShift),
      crate::cfg::Action::BitXor => Ok(Self::BitXor),
      crate::cfg::Action::Call => Ok(Self::Call),
      crate::cfg::Action::CallFunction => Ok(Self::CallFunction),
      crate::cfg::Action::CallMethod => Ok(Self::CallMethod),
      crate::cfg::Action::CharToAscii => Ok(Self::CharToAscii),
      crate::cfg::Action::CastOp => Ok(Self::CastOp),
      crate::cfg::Action::CloneSprite => Ok(Self::CloneSprite),
      crate::cfg::Action::ConstantPool(action) => Ok(Self::ConstantPool(action)),
      crate::cfg::Action::Decrement => Ok(Self::Decrement),
      crate::cfg::Action::DefineFunction(action) => Err(FromCfgActionError::DefineFunction(action)),
      crate::cfg::Action::DefineFunction2(action) => Err(FromCfgActionError::DefineFunction2(action)),
      crate::cfg::Action::DefineLocal => Ok(Self::DefineLocal),
      crate::cfg::Action::DefineLocal2 => Ok(Self::DefineLocal2),
      crate::cfg::Action::Delete => Ok(Self::Delete),
      crate::cfg::Action::Delete2 => Ok(Self::Delete2),
      crate::cfg::Action::Divide => Ok(Self::Divide),
      crate::cfg::Action::EndDrag => Ok(Self::EndDrag),
      crate::cfg::Action::Enumerate => Ok(Self::Enumerate),
      crate::cfg::Action::Enumerate2 => Ok(Self::Enumerate2),
      crate::cfg::Action::Equals => Ok(Self::Equals),
      crate::cfg::Action::Equals2 => Ok(Self::Equals2),
      crate::cfg::Action::Extends => Ok(Self::Extends),
      crate::cfg::Action::FsCommand2 => Ok(Self::FsCommand2),
      crate::cfg::Action::GetMember => Ok(Self::GetMember),
      crate::cfg::Action::GetProperty => Ok(Self::GetProperty),
      crate::cfg::Action::GetTime => Ok(Self::GetTime),
      crate::cfg::Action::GetUrl(action) => Ok(Self::GetUrl(action)),
      crate::cfg::Action::GetUrl2(action) => Ok(Self::GetUrl2(action)),
      crate::cfg::Action::GetVariable => Ok(Self::GetVariable),
      crate::cfg::Action::GotoFrame(action) => Ok(Self::GotoFrame(action)),
      crate::cfg::Action::GotoFrame2(action) => Ok(Self::GotoFrame2(action)),
      crate::cfg::Action::GotoLabel(action) => Ok(Self::GotoLabel(action)),
      crate::cfg::Action::Greater => Ok(Self::Greater),
      crate::cfg::Action::ImplementsOp => Ok(Self::ImplementsOp),
      crate::cfg::Action::Increment => Ok(Self::Increment),
      crate::cfg::Action::InitArray => Ok(Self::InitArray),
      crate::cfg::Action::InitObject => Ok(Self::InitObject),
      crate::cfg::Action::InstanceOf => Ok(Self::InstanceOf),
      crate::cfg::Action::Less => Ok(Self::Less),
      crate::cfg::Action::Less2 => Ok(Self::Less2),
      crate::cfg::Action::MbAsciiToChar => Ok(Self::MbAsciiToChar),
      crate::cfg::Action::MbCharToAscii => Ok(Self::MbCharToAscii),
      crate::cfg::Action::MbStringExtract => Ok(Self::MbStringExtract),
      crate::cfg::Action::MbStringLength => Ok(Self::MbStringLength),
      crate::cfg::Action::Modulo => Ok(Self::Modulo),
      crate::cfg::Action::Multiply => Ok(Self::Multiply),
      crate::cfg::Action::NewMethod => Ok(Self::NewMethod),
      crate::cfg::Action::NewObject => Ok(Self::NewObject),
      crate::cfg::Action::NextFrame => Ok(Self::NextFrame),
      crate::cfg::Action::Not => Ok(Self::Not),
      crate::cfg::Action::Or => Ok(Self::Or),
      crate::cfg::Action::Play => Ok(Self::Play),
      crate::cfg::Action::Pop => Ok(Self::Pop),
      crate::cfg::Action::PrevFrame => Ok(Self::PrevFrame),
      crate::cfg::Action::Push(action) => Ok(Self::Push(action)),
      crate::cfg::Action::PushDuplicate => Ok(Self::PushDuplicate),
      crate::cfg::Action::RandomNumber => Ok(Self::RandomNumber),
      crate::cfg::Action::Raw(action) => Ok(Self::Raw(action)),
      crate::cfg::Action::RemoveSprite => Ok(Self::RemoveSprite),
      crate::cfg::Action::SetMember => Ok(Self::SetMember),
      crate::cfg::Action::SetProperty => Ok(Self::SetProperty),
      crate::cfg::Action::SetTarget(action) => Ok(Self::SetTarget(action)),
      crate::cfg::Action::SetTarget2 => Ok(Self::SetTarget2),
      crate::cfg::Action::SetVariable => Ok(Self::SetVariable),
      crate::cfg::Action::StackSwap => Ok(Self::StackSwap),
      crate::cfg::Action::StartDrag => Ok(Self::StartDrag),
      crate::cfg::Action::Stop => Ok(Self::Stop),
      crate::cfg::Action::StopSounds => Ok(Self::StopSounds),
      crate::cfg::Action::StoreRegister(action) => Ok(Self::StoreRegister(action)),
      crate::cfg::Action::StrictEquals => Ok(Self::StrictEquals),
      crate::cfg::Action::StrictMode(action) => Ok(Self::StrictMode(action)),
      crate::cfg::Action::StringAdd => Ok(Self::StringAdd),
      crate::cfg::Action::StringEquals => Ok(Self::StringEquals),
      crate::cfg::Action::StringExtract => Ok(Self::StringExtract),
      crate::cfg::Action::StringGreater => Ok(Self::StringGreater),
      crate::cfg::Action::StringLength => Ok(Self::StringLength),
      crate::cfg::Action::StringLess => Ok(Self::StringLess),
      crate::cfg::Action::Subtract => Ok(Self::Subtract),
      crate::cfg::Action::TargetPath => Ok(Self::TargetPath),
      crate::cfg::Action::ToInteger => Ok(Self::ToInteger),
      crate::cfg::Action::ToNumber => Ok(Self::ToNumber),
      crate::cfg::Action::ToString => Ok(Self::ToString),
      crate::cfg::Action::ToggleQuality => Ok(Self::ToggleQuality),
      crate::cfg::Action::Trace => Ok(Self::Trace),
      crate::cfg::Action::TypeOf => Ok(Self::TypeOf),
    }
  }
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct DefineFunction {
  // Empty string if anonymous
  pub name: String,
  pub parameters: Vec<String>,
  pub body_size: u16,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct DefineFunction2 {
  // Empty string if anonymous
  pub name: String,
  pub register_count: u8,
  #[cfg_attr(feature = "serde", serde(flatten))]
  pub flags: FunctionFlags,
  pub parameters: Vec<Parameter>,
  pub body_size: u16,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct Error {
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub error: Option<InvalidActionError>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct If {
  pub offset: i16,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct Jump {
  pub offset: i16,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct CatchBlock {
  pub target: CatchTarget,
  pub size: u16,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct Try {
  pub r#try: u16,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub catch: Option<CatchBlock>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub finally: Option<u16>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct WaitForFrame {
  pub frame: u16,
  pub skip: u8,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct WaitForFrame2 {
  pub skip: u8,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
pub struct With {
  pub size: u16,
}
