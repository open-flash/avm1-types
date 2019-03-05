import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Multiply extends ActionBase {
  action: ActionType.Multiply;
}

export const $Multiply: DocumentIoType<Multiply> = new DocumentType<Multiply>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Multiply as ActionType.Multiply})},
  },
  changeCase: CaseStyle.SnakeCase,
});
