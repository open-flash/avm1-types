import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $InvalidActionError, InvalidActionError } from "../invalid-action-error";

export interface Error extends ActionBase {
  action: ActionType.Error;
  error?: InvalidActionError;
}

export const $Error: DocumentIoType<Error> = new DocumentType<Error>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Error})},
    error: {type: $InvalidActionError, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
