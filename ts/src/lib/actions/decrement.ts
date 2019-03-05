import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Decrement extends ActionBase {
  action: ActionType.Decrement;
}

export const $Decrement: DocumentIoType<Decrement> = new DocumentType<Decrement>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Decrement as ActionType.Decrement})},
  },
  changeCase: CaseStyle.SnakeCase,
});
