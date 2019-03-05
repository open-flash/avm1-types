import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface SetTarget2 extends ActionBase {
  action: ActionType.SetTarget2;
}

export const $SetTarget2: DocumentIoType<SetTarget2> = new DocumentType<SetTarget2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetTarget2 as ActionType.SetTarget2})},
  },
  changeCase: CaseStyle.SnakeCase,
});
