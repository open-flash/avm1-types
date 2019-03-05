import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface NewObject extends ActionBase {
  action: ActionType.NewObject;
}

export const $NewObject: DocumentIoType<NewObject> = new DocumentType<NewObject>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NewObject as ActionType.NewObject})},
  },
  changeCase: CaseStyle.SnakeCase,
});
