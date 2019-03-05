import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface BitURShift extends ActionBase {
  action: ActionType.BitURShift;
}

export const $BitURShift: DocumentIoType<BitURShift> = new DocumentType<BitURShift>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitURShift as ActionType.BitURShift})},
  },
  changeCase: CaseStyle.SnakeCase,
});
