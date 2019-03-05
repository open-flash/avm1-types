import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface RandomNumber extends ActionBase {
  action: ActionType.RandomNumber;
}

export const $RandomNumber: DocumentIoType<RandomNumber> = new DocumentType<RandomNumber>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.RandomNumber as ActionType.RandomNumber})},
  },
  changeCase: CaseStyle.SnakeCase,
});
