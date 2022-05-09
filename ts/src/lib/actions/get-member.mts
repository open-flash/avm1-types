import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface GetMember extends ActionBase {
  action: ActionType.GetMember;
}

export const $GetMember: RecordIoType<GetMember> = new RecordType<GetMember>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetMember as ActionType.GetMember})},
  },
  changeCase: CaseStyle.SnakeCase,
});
