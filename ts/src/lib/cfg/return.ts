import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";

export interface Return {
  type: CfgFlowType.Return;
}

export const $Return: RecordIoType<Return> = new RecordType<Return>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Return as CfgFlowType.Return})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
