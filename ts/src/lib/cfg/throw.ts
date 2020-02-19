import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";

export interface Throw {
  type: CfgFlowType.Throw;
}

export const $Throw: DocumentIoType<Throw> = new DocumentType<Throw>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Throw as CfgFlowType.Throw})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
