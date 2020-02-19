import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label";

export interface If {
  type: CfgFlowType.If;
  trueTarget: NullableCfgLabel;
  falseTarget: NullableCfgLabel;
}

export const $If: DocumentIoType<If> = new DocumentType<If>(() => ({
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
