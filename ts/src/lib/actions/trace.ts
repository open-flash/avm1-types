import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Trace extends ActionBase {
  action: ActionType.Trace;
}

export const $Trace: DocumentIoType<Trace> = new DocumentType<Trace>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Trace as ActionType.Trace})},
  },
  changeCase: CaseStyle.SnakeCase,
});
