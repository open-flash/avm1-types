import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface BitRShift extends ActionBase {
  action: ActionType.BitRShift;
}

export const $BitRShift: DocumentIoType<BitRShift> = new DocumentType<BitRShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitRShift as ActionType.BitRShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
