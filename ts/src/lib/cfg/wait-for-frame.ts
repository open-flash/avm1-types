import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label";

export interface WaitForFrame {
  type: CfgFlowType.WaitForFrame;
  frame: Uint16;
  readyTarget: NullableCfgLabel;
  loadingTarget: NullableCfgLabel;
}

// tslint:disable-next-line:max-line-length
export const $WaitForFrame: DocumentIoType<WaitForFrame> = new DocumentType<WaitForFrame>(() => ({
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
