import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";
import { $PushValue, PushValue } from "../push-value.js";

export interface Push extends ActionBase {
  action: ActionType.Push;
  values: PushValue[];
}

export const $Push: RecordIoType<Push> = new RecordType<Push>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Push as ActionType.Push})},
    values: {type: new ArrayType({itemType: $PushValue, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
