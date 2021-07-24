import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";
import { $Cfg, Cfg } from "./cfg.js";

export interface With {
  type: CfgFlowType.With;
  body: Cfg;
}

export const $With: RecordIoType<With> = new RecordType<With>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.With as CfgFlowType.With})},
    body: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
