use crate::{CfgAction, CfgLabel};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgEndBlock {
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
  pub next: CfgLabel,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgThrowBlock {
  pub label: CfgLabel,
  pub actions: Vec<CfgAction>,
}
