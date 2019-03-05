import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Play extends ActionBase {
  action: ActionType.Play;
}

export const $Play: DocumentIoType<Play> = new DocumentType<Play>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Play as ActionType.Play})},
  },
  changeCase: CaseStyle.SnakeCase,
});
