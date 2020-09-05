import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GetTime extends ActionBase {
  action: ActionType.GetTime;
}

export const $GetTime: RecordIoType<GetTime> = new RecordType<GetTime>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetTime as ActionType.GetTime})},
  },
  changeCase: CaseStyle.SnakeCase,
});
