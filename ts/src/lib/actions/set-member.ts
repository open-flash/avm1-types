import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface SetMember extends ActionBase {
  action: ActionType.SetMember;
}

export const $SetMember: RecordIoType<SetMember> = new RecordType<SetMember>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.SetMember as ActionType.SetMember})},
  },
  changeCase: CaseStyle.SnakeCase,
});
