import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface PushDuplicate extends ActionBase {
  action: ActionType.PushDuplicate;
}

export const $PushDuplicate: RecordIoType<PushDuplicate> = new RecordType<PushDuplicate>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.PushDuplicate as ActionType.PushDuplicate})},
  },
  changeCase: CaseStyle.SnakeCase,
});
