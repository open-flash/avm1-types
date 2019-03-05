import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Subtract extends ActionBase {
  action: ActionType.Subtract;
}

export const $Subtract: DocumentIoType<Subtract> = new DocumentType<Subtract>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Subtract as ActionType.Subtract})},
  },
  changeCase: CaseStyle.SnakeCase,
});
