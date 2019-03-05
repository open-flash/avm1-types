import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Add extends ActionBase {
  action: ActionType.Add;
}

export const $Add: DocumentIoType<Add> = new DocumentType<Add>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Add as ActionType.Add})},
  },
  changeCase: CaseStyle.SnakeCase,
});
