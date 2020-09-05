import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label.js";

export interface If {
  type: CfgFlowType.If;
  trueTarget: NullableCfgLabel;
  falseTarget: NullableCfgLabel;
}

export const $If: RecordIoType<If> = new RecordType<If>(() => ({
  properties: {
    type: {
      type: new LiteralType({
        type: $CfgBlockType,
        value: CfgFlowType.If as const,
      }),
    },
    trueTarget: {type: $NullableCfgLabel},
    falseTarget: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
