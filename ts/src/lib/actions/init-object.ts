import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface InitObject extends ActionBase {
  action: ActionType.InitObject;
}

export const $InitObject: DocumentIoType<InitObject> = new DocumentType<InitObject>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.InitObject as ActionType.InitObject})},
  },
  changeCase: CaseStyle.SnakeCase,
});
