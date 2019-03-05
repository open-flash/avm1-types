import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface GetMember extends ActionBase {
  action: ActionType.GetMember;
}

export const $GetMember: DocumentIoType<GetMember> = new DocumentType<GetMember>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetMember as ActionType.GetMember})},
  },
  changeCase: CaseStyle.SnakeCase,
});
