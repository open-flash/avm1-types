import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";
import { $NullableCfgLabel, NullableCfgLabel } from "./cfg-label";

export interface Simple {
  type: CfgFlowType.Simple;
  next: NullableCfgLabel;
}

export const $Simple: DocumentIoType<Simple> = new DocumentType<Simple>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Simple as CfgFlowType.Simple})},
    next: {type: $NullableCfgLabel},
  },
  changeCase: CaseStyle.SnakeCase,
}));
