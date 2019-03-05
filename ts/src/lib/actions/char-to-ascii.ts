import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface CharToAscii extends ActionBase {
  action: ActionType.CharToAscii;
}

export const $CharToAscii: DocumentIoType<CharToAscii> = new DocumentType<CharToAscii>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CharToAscii as ActionType.CharToAscii})},
  },
  changeCase: CaseStyle.SnakeCase,
});
