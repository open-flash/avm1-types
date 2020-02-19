use serde::{Deserialize, Serialize};

pub use self::push_value::PushValue;

pub mod actions;
pub mod cfg_actions;
pub mod cfg_blocks;
mod float_is;
mod helpers;
mod push_value;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct InvalidActionError {
  pub message: String,
}

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
  ConstantPool(actions::ConstantPool),
  Decrement,
  DefineFunction(actions::DefineFunction),
  DefineFunction2(actions::DefineFunction2),
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
  Error(actions::Error),
  Extends,
  FsCommand2,
  GetMember,
  GetProperty,
  GetTime,
  GetUrl(actions::GetUrl),
  GetUrl2(actions::GetUrl2),
  GetVariable,
  GotoFrame(actions::GotoFrame),
  GotoFrame2(actions::GotoFrame2),
  GotoLabel(actions::GoToLabel),
  Greater,
  If(actions::If),
  ImplementsOp,
  Increment,
  InitArray,
  InitObject,
  InstanceOf,
  Jump(actions::Jump),
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
  Push(actions::Push),
  PushDuplicate,
  RandomNumber,
  RemoveSprite,
  Return,
  SetMember,
  SetProperty,
  SetTarget(actions::SetTarget),
  SetTarget2,
  SetVariable,
  StackSwap,
  StartDrag,
  Stop,
  StopSounds,
  StoreRegister(actions::StoreRegister),
  StrictEquals,
  StrictMode(actions::StrictMode),
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
  Try(actions::Try),
  TypeOf,
  Unknown(actions::UnknownAction),
  WaitForFrame(actions::WaitForFrame),
  WaitForFrame2(actions::WaitForFrame2),
  With(actions::With),
}

// TODO: Use a `NonEmptyVec` and custom serializer
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Cfg {
  pub head: Box<CfgBlock>,
  pub tail: Vec<CfgBlock>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgLabel(pub String);

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum CfgBlock {
  Error(cfg_blocks::CfgErrorBlock),
  If(cfg_blocks::CfgIfBlock),
  Return(cfg_blocks::CfgReturnBlock),
  Simple(cfg_blocks::CfgSimpleBlock),
  Throw(cfg_blocks::CfgThrowBlock),
  Try(cfg_blocks::CfgTryBlock),
  WaitForFrame(cfg_blocks::CfgWaitForFrameBlock),
  WaitForFrame2(cfg_blocks::CfgWaitForFrame2Block),
  With(cfg_blocks::CfgWithBlock),
}

/// Similar to `Action` but no `End`, `Error , `Jump`, `If` `Throw`, `Return`,
/// `Try`, `WaitForFrame`, `WaitForFrame2` and `With`, also different
/// `DefineFunction` and `DefineFunction2`.
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "action", rename_all = "kebab-case")]
pub enum CfgAction {
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
  ConstantPool(actions::ConstantPool),
  Decrement,
  DefineFunction(cfg_actions::CfgDefineFunction),
  DefineFunction2(cfg_actions::CfgDefineFunction2),
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
  GetUrl(actions::GetUrl),
  GetUrl2(actions::GetUrl2),
  GetVariable,
  GotoFrame(actions::GotoFrame),
  GotoFrame2(actions::GotoFrame2),
  GotoLabel(actions::GoToLabel),
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
  Push(actions::Push),
  PushDuplicate,
  RandomNumber,
  RemoveSprite,
  SetMember,
  SetProperty,
  SetTarget(actions::SetTarget),
  SetTarget2,
  SetVariable,
  StackSwap,
  StartDrag,
  Stop,
  StopSounds,
  StoreRegister(actions::StoreRegister),
  StrictEquals,
  StrictMode(actions::StrictMode),
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
  Unknown(actions::UnknownAction),
}

#[cfg(test)]
mod tests {
  use std::path::Path;

  use test_generator::test_resources;

  use crate::Cfg;

  #[test_resources("../tests/avm1/[!.]*/*/")]
  fn test_cfg(path: &str) {
    let path: &Path = Path::new(path);
    let name = path
      .components()
      .last()
      .unwrap()
      .as_os_str()
      .to_str()
      .expect("Failed to retrieve sample name");

    if name == "corrupted-push" || name == "try-jump-to-catch-throw-finally" {
      return;
    }

    let cfg_path = path.join("cfg.json");

    let value_json = ::std::fs::read_to_string(cfg_path).expect("Failed to read CFG file");

    let value: Cfg = serde_json_v8::from_str(&value_json).expect("Failed to read CFG");

    let output_json = serde_json_v8::to_string_pretty(&value).expect("Failed to write CFG");
    let output_json = format!("{}\n", output_json);

    assert_eq!(output_json, value_json)
  }
}

#[cfg(test)]
mod e2e_raw_tests {
  use test_generator::test_resources;

  use super::*;

  #[test_resources("../tests/raw/*.json")]
  fn test_parse_action(path: &str) {
    let file = ::std::fs::File::open(path).unwrap();
    let reader = ::std::io::BufReader::new(file);
    // Check that we can parse the test case without issues
    serde_json_v8::from_reader::<_, Action>(reader).unwrap();
  }
}
