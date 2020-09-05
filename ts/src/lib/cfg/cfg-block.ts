import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $Action, Action } from "./action.js";
import { $CfgFlow, CfgFlow } from "./cfg-flow.js";
import { $CfgLabel, CfgLabel } from "./cfg-label.js";

export interface CfgBlock {
  label: CfgLabel;
  actions: Action[];
  flow: CfgFlow;
}

export const $CfgBlock: RecordIoType<CfgBlock> = new RecordType<CfgBlock>(() => ({
  properties: {
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
    flow: {type: $CfgFlow},
  },
  changeCase: CaseStyle.SnakeCase,
}));
