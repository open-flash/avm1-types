import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Delete2 extends ActionBase {
  action: ActionType.Delete2;
}

export const $Delete2: DocumentIoType<Delete2> = new DocumentType<Delete2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Delete2 as ActionType.Delete2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
