import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Throw extends ActionBase {
  action: ActionType.Throw;
}

export const $Throw: DocumentIoType<Throw> = new DocumentType<Throw>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Throw as ActionType.Throw})},
  },
  changeCase: CaseStyle.SnakeCase,
});
