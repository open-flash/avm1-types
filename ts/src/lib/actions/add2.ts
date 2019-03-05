import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Add2 extends ActionBase {
  action: ActionType.Add2;
}

export const $Add2: DocumentIoType<Add2> = new DocumentType<Add2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Add2 as ActionType.Add2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
