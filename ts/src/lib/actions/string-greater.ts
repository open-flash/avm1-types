import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface StringGreater extends ActionBase {
  action: ActionType.StringGreater;
}

export const $StringGreater: DocumentIoType<StringGreater> = new DocumentType<StringGreater>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringGreater as ActionType.StringGreater})},
  },
  changeCase: CaseStyle.SnakeCase,
});
