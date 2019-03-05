#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgDefineFunction {
  pub name: String,
  pub parameters: Vec<String>,
  pub body: super::Cfg,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgDefineFunction2 {
  // Empty string if anonymous
  pub name: String,
  pub preload_parent: bool,
  pub preload_root: bool,
  pub suppress_super: bool,
  pub preload_super: bool,
  pub suppress_arguments: bool,
  pub preload_arguments: bool,
  pub suppress_this: bool,
  pub preload_this: bool,
  pub preload_global: bool,
  pub register_count: usize,
  pub parameters: Vec<crate::actions::define_function2::Parameter>,
  pub body: super::Cfg,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgIf {
  pub target: super::CfgLabel,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgJump {
  pub target: super::CfgLabel,
}

// Action code 0x8f
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgTry {
  pub r#try: crate::Cfg,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub catch: Option<crate::Cfg>,
  pub catch_target: crate::actions::r#try::CatchTarget,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub finally: Option<crate::Cfg>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CfgWith {
  pub with: Option<crate::Cfg>,
}
