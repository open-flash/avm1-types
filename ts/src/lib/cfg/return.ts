import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";

export interface Return {
  type: CfgFlowType.Return;
}

export const $Return: DocumentIoType<Return> = new DocumentType<Return>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Return as CfgFlowType.Return})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
