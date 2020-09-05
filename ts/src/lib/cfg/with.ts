import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $Cfg, Cfg } from "./cfg.js";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";

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
