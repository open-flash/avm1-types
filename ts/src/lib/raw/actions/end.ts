import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../../action-base";
import { $ActionType, ActionType } from "../../action-type";

export interface End extends ActionBase {
  action: ActionType.End;
}

export const $End: DocumentIoType<End> = new DocumentType<End>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.End})},
  },
  changeCase: CaseStyle.SnakeCase,
});
