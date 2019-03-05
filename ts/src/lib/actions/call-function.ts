import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface CallFunction extends ActionBase {
  action: ActionType.CallFunction;
}

export const $CallFunction: DocumentIoType<CallFunction> = new DocumentType<CallFunction>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CallFunction as ActionType.CallFunction})},
  },
  changeCase: CaseStyle.SnakeCase,
});
