import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label.js";

export interface WaitForFrame2 {
  type: CfgFlowType.WaitForFrame2;
  readyTarget: NullableCfgLabel;
  loadingTarget: NullableCfgLabel;
}

// tslint:disable-next-line:max-line-length
export const $WaitForFrame2: RecordIoType<WaitForFrame2> = new RecordType<WaitForFrame2>(() => ({
  properties: {
    type: {
      type: new LiteralType({
        type: $CfgBlockType,
        value: CfgFlowType.WaitForFrame2 as const,
      }),
    },
    readyTarget: {type: $NullableCfgLabel},
    loadingTarget: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
