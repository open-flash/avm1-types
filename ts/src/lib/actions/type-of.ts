import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface TypeOf extends ActionBase {
  action: ActionType.TypeOf;
}

export const $TypeOf: DocumentIoType<TypeOf> = new DocumentType<TypeOf>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.TypeOf as ActionType.TypeOf})},
  },
  changeCase: CaseStyle.SnakeCase,
});
