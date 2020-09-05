import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label.js";

export interface WaitForFrame {
  type: CfgFlowType.WaitForFrame;
  frame: Uint16;
  readyTarget: NullableCfgLabel;
  loadingTarget: NullableCfgLabel;
}

// tslint:disable-next-line:max-line-length
export const $WaitForFrame: RecordIoType<WaitForFrame> = new RecordType<WaitForFrame>(() => ({
  properties: {
    type: {
      type: new LiteralType({
        type: $CfgBlockType,
        value: CfgFlowType.WaitForFrame as const,
      }),
    },
    frame: {type: $Uint16},
    readyTarget: {type: $NullableCfgLabel},
    loadingTarget: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
