import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface RemoveSprite extends ActionBase {
  action: ActionType.RemoveSprite;
}

export const $RemoveSprite: DocumentIoType<RemoveSprite> = new DocumentType<RemoveSprite>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.RemoveSprite as ActionType.RemoveSprite})},
  },
  changeCase: CaseStyle.SnakeCase,
});
