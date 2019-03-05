import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface NextFrame extends ActionBase {
  action: ActionType.NextFrame;
}

export const $NextFrame: DocumentIoType<NextFrame> = new DocumentType<NextFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NextFrame as ActionType.NextFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
