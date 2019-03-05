import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface PushDuplicate extends ActionBase {
  action: ActionType.PushDuplicate;
}

export const $PushDuplicate: DocumentIoType<PushDuplicate> = new DocumentType<PushDuplicate>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.PushDuplicate as ActionType.PushDuplicate})},
  },
  changeCase: CaseStyle.SnakeCase,
});
