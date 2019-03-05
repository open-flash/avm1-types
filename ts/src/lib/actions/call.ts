import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Call extends ActionBase {
  action: ActionType.Call;
}

export const $Call: DocumentIoType<Call> = new DocumentType<Call>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Call as ActionType.Call})},
  },
  changeCase: CaseStyle.SnakeCase,
});
