import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.mjs";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label.mjs";

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
