import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label";

export interface WaitForFrame2 {
  type: CfgFlowType.WaitForFrame2;
  readyTarget: NullableCfgLabel;
  loadingTarget: NullableCfgLabel;
}

// tslint:disable-next-line:max-line-length
export const $WaitForFrame2: DocumentIoType<WaitForFrame2> = new DocumentType<WaitForFrame2>(() => ({
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
