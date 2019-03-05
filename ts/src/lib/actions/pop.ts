import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Pop extends ActionBase {
  action: ActionType.Pop;
}

export const $Pop: DocumentIoType<Pop> = new DocumentType<Pop>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Pop as ActionType.Pop})},
  },
  changeCase: CaseStyle.SnakeCase,
});
