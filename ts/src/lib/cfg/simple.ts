import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label.js";

export interface Simple {
  type: CfgFlowType.Simple;
  next: NullableCfgLabel;
}

export const $Simple: RecordIoType<Simple> = new RecordType<Simple>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Simple as CfgFlowType.Simple})},
    next: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
