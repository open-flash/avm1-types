import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface BitLShift extends ActionBase {
  action: ActionType.BitLShift;
}

export const $BitLShift: DocumentIoType<BitLShift> = new DocumentType<BitLShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitLShift as ActionType.BitLShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
