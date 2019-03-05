use avm1_tree;

pub fn get() -> avm1_tree::Cfg {
  avm1_tree::Cfg {
    blocks: vec![
      avm1_tree::CfgBlock {
        label: avm1_tree::CfgLabel(String::from("label_p0")),
        actions: vec![
          avm1_tree::CfgAction::DefineFunction(avm1_tree::cfg_actions::CfgDefineFunction {
            name: String::from("f"),
            parameters: Vec::new(),
            body: avm1_tree::Cfg {
              blocks: vec![
                avm1_tree::CfgBlock {
                  label: avm1_tree::CfgLabel(String::from("label_p9")),
                  actions: vec![
                    avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
                      values: vec![
                        avm1_tree::Value::String(String::from("err")),
                      ],
                    }),
                    avm1_tree::CfgAction::Trace,
                    avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
                      values: vec![
                        avm1_tree::Value::String(String::from("err-value")),
                      ],
                    }),
                    avm1_tree::CfgAction::Throw,
                  ],
                  next: Option::None,
                },
              ],
            },
          }),
          avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
            values: vec![
              avm1_tree::Value::String(String::from("start")),
            ],
          }),
          avm1_tree::CfgAction::Trace,
          avm1_tree::CfgAction::Try(avm1_tree::cfg_actions::CfgTry {
            r#try: avm1_tree::Cfg {
              blocks: vec![
                avm1_tree::CfgBlock {
                  label: avm1_tree::CfgLabel(String::from("label_p56")),
                  actions: vec![
                    avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
                      values: vec![
                        avm1_tree::Value::Float64(0f64),
                        avm1_tree::Value::String(String::from("f")),
                      ],
                    }),
                    avm1_tree::CfgAction::CallFunction,
                    avm1_tree::CfgAction::Pop,
                    avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
                      values: vec![
                        avm1_tree::Value::String(String::from("in-try")),
                      ],
                    }),
                    avm1_tree::CfgAction::Trace,
                    avm1_tree::CfgAction::Jump(avm1_tree::cfg_actions::CfgJump {
                      target: avm1_tree::CfgLabel(String::from("label_p110")),
                    }),
                  ],
                  next: Option::None,
                },
                avm1_tree::CfgBlock {
                  label: avm1_tree::CfgLabel(String::from("label_p110")),
                  actions: vec![],
                  next: Option::None,
                },
              ],
            },
            catch_target: avm1_tree::actions::r#try::CatchTarget::Variable(String::from("e")),
            catch: Option::Some(avm1_tree::Cfg {
              blocks: vec![
                avm1_tree::CfgBlock {
                  label: avm1_tree::CfgLabel(String::from("label_p90")),
                  actions: vec![
                    avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
                      values: vec![
                        avm1_tree::Value::String(String::from("in-err")),
                      ],
                    }),
                    avm1_tree::CfgAction::Trace,
                    avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
                      values: vec![
                        avm1_tree::Value::String(String::from("e")),
                      ],
                    }),
                    avm1_tree::CfgAction::GetVariable,
                    avm1_tree::CfgAction::Trace,
                  ],
                  next: Option::Some(avm1_tree::CfgLabel(String::from("label_p110"))),
                },
                avm1_tree::CfgBlock {
                  label: avm1_tree::CfgLabel(String::from("label_p110")),
                  actions: vec![],
                  next: Option::None,
                },
              ],
            }),
            finally: Option::None,
          }),
          avm1_tree::CfgAction::Push(avm1_tree::actions::Push {
            values: vec![
              avm1_tree::Value::String(String::from("end")),
            ],
          }),
          avm1_tree::CfgAction::Trace,
        ],
        next: Option::Some(avm1_tree::CfgLabel(String::from("label_p119"))),
      },
      avm1_tree::CfgBlock {
        label: avm1_tree::CfgLabel(String::from("label_p119")),
        actions: vec![],
        next: Option::None,
      },
    ],
  }
}
