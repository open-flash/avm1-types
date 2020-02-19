import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $PushValue, PushValue } from "../push-value";

export interface Push extends ActionBase {
  action: ActionType.Push;
  values: PushValue[];
}

export const $Push: DocumentIoType<Push> = new DocumentType<Push>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Push as ActionType.Push})},
    values: {type: new ArrayType({itemType: $PushValue, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
