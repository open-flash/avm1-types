import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
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
