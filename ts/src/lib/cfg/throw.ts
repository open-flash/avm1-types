import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";

export interface Throw {
  type: CfgFlowType.Throw;
}

export const $Throw: RecordIoType<Throw> = new RecordType<Throw>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Throw as CfgFlowType.Throw})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
