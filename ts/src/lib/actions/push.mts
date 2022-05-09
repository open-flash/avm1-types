import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";
import { $PushValue, PushValue } from "../push-value.mjs";

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
