import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface NewMethod extends ActionBase {
  action: ActionType.NewMethod;
}

export const $NewMethod: DocumentIoType<NewMethod> = new DocumentType<NewMethod>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NewMethod as ActionType.NewMethod})},
  },
  changeCase: CaseStyle.SnakeCase,
});
