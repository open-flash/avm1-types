import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface MbCharToAscii extends ActionBase {
  action: ActionType.MbCharToAscii;
}

export const $MbCharToAscii: DocumentIoType<MbCharToAscii> = new DocumentType<MbCharToAscii>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.MbCharToAscii as ActionType.MbCharToAscii})},
  },
  changeCase: CaseStyle.SnakeCase,
});
