import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface BitXor extends ActionBase {
  action: ActionType.BitXor;
}

export const $BitXor: DocumentIoType<BitXor> = new DocumentType<BitXor>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitXor as ActionType.BitXor})},
  },
  changeCase: CaseStyle.SnakeCase,
});
