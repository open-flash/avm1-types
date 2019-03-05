import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface CastOp extends ActionBase {
  action: ActionType.CastOp;
}

export const $CastOp: DocumentIoType<CastOp> = new DocumentType<CastOp>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CastOp as ActionType.CastOp})},
  },
  changeCase: CaseStyle.SnakeCase,
});
