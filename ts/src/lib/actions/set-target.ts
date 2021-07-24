import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface SetTarget extends ActionBase {
  action: ActionType.SetTarget;
  targetName: string;
}

export const $SetTarget: RecordIoType<SetTarget> = new RecordType<SetTarget>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetTarget as ActionType.SetTarget})},
    targetName: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
