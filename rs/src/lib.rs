use serde::{Deserialize, Serialize};

pub use self::value::Value;

pub mod actions;
pub mod cfg_actions;
pub mod cfg_blocks;
mod float_is;
mod helpers;
mod value;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "action", rename_all = "kebab-case")]
pub enum Action {
  Unknown(actions::UnknownAction),
  Add,
  And,
  CastOp,
  CloneSprite,
  Divide,
  Equals,
  EndDrag,
  FsCommand2,
  GetProperty,
  GetVariable,
  ImplementsOp,
  Less,
  MbStringLength,
  Multiply,
  NextFrame,
  Not,
  Or,
  PrevFrame,
  Play,
  Pop,
  RandomNumber,
  RemoveSprite,
  SetProperty,
  SetTarget2,
  SetVariable,
  StartDrag,
  Stop,
  StopSounds,
  StringAdd,
  StringEquals,
  StringExtract,
  StringLength,
  StringLess,
  Subtract,
  Throw,
  ToInteger,
  ToggleQuality,
  Trace,
  // 0x31
  CharToAscii,
  // 0x32
  AsciiToChar,
  // 0x33
  GetTime,
  // 0x34
  MbStringExtract,
  // 0x35
  MbCharToAscii,
  // 0x36
  MbAsciiToChar,
  // 0x37
  Delete,
  // 0x3a
  Delete2,
  // 0x3b
  DefineLocal,
  // 0x3c
  CallFunction,
  // 0x3d
  Return,
  // 0x3e
  Modulo,
  // 0x3f
  NewObject,
  // 0x40
  DefineLocal2,
  // 0x41
  InitArray,
  // 0x42
  InitObject,
  // 0x43
  TypeOf,
  // 0x44
  TargetPath,
  // 0x45
  Enumerate,
  // 0x46
  Add2,
  // 0x47
  Less2,
  // 0x48
  Equals2,
  // 0x49
  ToNumber,
  // 0x4a
  ToString,
  // 0x4b
  PushDuplicate,
  // 0x4c
  StackSwap,
  // 0x4d
  GetMember,
  // 0x4e
  SetMember,
  // 0x4f
  Increment,
  // 0x50
  Decrement,
  // 0x51
  CallMethod,
  // 0x52
  NewMethod,
  // 0x53
  InstanceOf,
  // 0x54
  Enumerate2,
  // 0x55
  BitAnd,
  // 0x60
  BitOr,
  // 0x61
  BitXor,
  // 0x62
  BitLShift,
  // 0x63
  BitRShift,
  // 0x64
  BitURShift,
  // 0x65
  StrictEquals,
  // 0x66
  Greater,
  // 0x67
  StringGreater,
  // 0x68
  Extends,
  // 0x69
  GotoFrame(actions::GotoFrame),
  // 0x81
  GetUrl(actions::GetUrl),
  // 0x83
  StoreRegister(actions::StoreRegister),
  // 0x87
  ConstantPool(actions::ConstantPool),
  // 0x88
  WaitForFrame(actions::WaitForFrame),
  // 0x8a
  SetTarget(actions::SetTarget),
  // 0x8b
  GotoLabel(actions::GoToLabel),
  // 0x8c
  WaitForFrame2(actions::WaitForFrame2),
  // 0x8d
  DefineFunction2(actions::DefineFunction2),
  // 0x8e
  Try(actions::Try),
  // 0x8f
  With(actions::With),
  // 0x94
  Push(actions::Push),
  // 0x96
  Jump(actions::Jump),
  // 0x99
  GetUrl2(actions::GetUrl2),
  // 0x9a
  DefineFunction(actions::DefineFunction),
  // 0x9b
  If(actions::If),
  // 0x9d
  Call,
  // 0x9e
  GotoFrame2(actions::GotoFrame2),
  // 0x9f
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Cfg {
  pub blocks: Vec<CfgBlock>,
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

/// Similar to `Action` but no `Jump`, `If` `Throw`, `Return`, `Try`,
/// `WaitForFrame`, `WaitForFrame2` and `With`, also different `DefineFunction`
/// and `DefineFunction2`.
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "action", rename_all = "kebab-case")]
pub enum CfgAction {
  Unknown(actions::UnknownAction),
  Add,
  And,
  CastOp,
  CloneSprite,
  Divide,
  Equals,
  EndDrag,
  FsCommand2,
  GetProperty,
  GetVariable,
  ImplementsOp,
  Less,
  MbStringLength,
  Multiply,
  NextFrame,
  Not,
  Or,
  PrevFrame,
  Play,
  Pop,
  RandomNumber,
  RemoveSprite,
  SetProperty,
  SetTarget2,
  SetVariable,
  StartDrag,
  Stop,
  StopSounds,
  StringAdd,
  StringEquals,
  StringExtract,
  StringLength,
  StringLess,
  Subtract,
  ToInteger,
  ToggleQuality,
  Trace,
  CharToAscii,
  AsciiToChar,
  GetTime,
  MbStringExtract,
  MbCharToAscii,
  MbAsciiToChar,
  Delete,
  Delete2,
  DefineLocal,
  CallFunction,
  Modulo,
  NewObject,
  DefineLocal2,
  InitArray,
  InitObject,
  TypeOf,
  TargetPath,
  Enumerate,
  Add2,
  Less2,
  Equals2,
  ToNumber,
  ToString,
  PushDuplicate,
  StackSwap,
  GetMember,
  SetMember,
  Increment,
  Decrement,
  CallMethod,
  NewMethod,
  InstanceOf,
  Enumerate2,
  BitAnd,
  BitOr,
  BitXor,
  BitLShift,
  BitRShift,
  BitURShift,
  StrictEquals,
  Greater,
  StringGreater,
  Extends,
  GotoFrame(actions::GotoFrame),
  GetUrl(actions::GetUrl),
  StoreRegister(actions::StoreRegister),
  ConstantPool(actions::ConstantPool),
  SetTarget(actions::SetTarget),
  GotoLabel(actions::GoToLabel),
  StrictMode(actions::StrictMode),
  DefineFunction2(cfg_actions::CfgDefineFunction2),
  Push(actions::Push),
  GetUrl2(actions::GetUrl2),
  DefineFunction(cfg_actions::CfgDefineFunction),
  Call,
  GotoFrame2(actions::GotoFrame2),
}

#[cfg(test)]
mod tests {
  use std::path::Path;

  use ::test_generator::test_expand_paths;

  use crate::Cfg;

  test_expand_paths! { test_cfg; "../tests/avm1/[!.]*/*/" }
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
  use ::test_generator::test_expand_paths;

  use super::*;

  test_expand_paths! { test_parse_action; "../tests/raw/*.json" }
  fn test_parse_action(path: &str) {
    let file = ::std::fs::File::open(path).unwrap();
    let reader = ::std::io::BufReader::new(file);
    // Check that we can parse the test case without issues
    serde_json::from_reader::<_, Action>(reader).unwrap();
  }
}
