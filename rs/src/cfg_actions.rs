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
  pub target: Option<super::CfgLabel>,
}
