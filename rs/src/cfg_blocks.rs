use crate::{CfgAction, CfgLabel};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgErrorBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub error: Option<crate::InvalidActionError>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgIfBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  pub if_true: Option<CfgLabel>,
  pub if_false: Option<CfgLabel>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgReturnBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgSimpleBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  pub next: Option<CfgLabel>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgTryBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  pub r#try: crate::Cfg,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub catch: Option<crate::Cfg>,
  pub catch_target: crate::actions::r#try::CatchTarget,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub finally: Option<crate::Cfg>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgWaitForFrameBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  pub frame: u16,
  pub if_loaded: Option<CfgLabel>,
  pub if_not_loaded: Option<CfgLabel>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgWaitForFrame2Block {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  pub if_loaded: Option<CfgLabel>,
  pub if_not_loaded: Option<CfgLabel>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgWithBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
  pub with: crate::Cfg,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgThrowBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
}
