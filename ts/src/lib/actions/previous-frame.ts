import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface PreviousFrame extends ActionBase {
  action: ActionType.PreviousFrame;
}

export const $PreviousFrame: DocumentIoType<PreviousFrame> = new DocumentType<PreviousFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.PreviousFrame as ActionType.PreviousFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
