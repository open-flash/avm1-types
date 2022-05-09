import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.mjs";

export interface Return {
  type: CfgFlowType.Return;
}

export const $Return: RecordIoType<Return> = new RecordType<Return>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Return as CfgFlowType.Return})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
