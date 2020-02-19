import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Cfg, Cfg } from "./cfg";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";

export interface With {
  type: CfgFlowType.With;
  body: Cfg;
}

export const $With: DocumentIoType<With> = new DocumentType<With>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.With as CfgFlowType.With})},
    body: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
