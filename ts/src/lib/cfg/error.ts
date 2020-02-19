import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $InvalidActionError, InvalidActionError } from "../invalid-action-error";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type";

export interface Error {
  type: CfgFlowType.Error;
  error?: InvalidActionError;
}

export const $Error: DocumentIoType<Error> = new DocumentType<Error>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Error as CfgFlowType.Error})},
    error: {type: $InvalidActionError, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
