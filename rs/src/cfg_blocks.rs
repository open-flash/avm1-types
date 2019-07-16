use crate::{CfgAction, CfgLabel};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgErrorBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
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
