import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GetMember extends ActionBase {
  action: ActionType.GetMember;
}

export const $GetMember: RecordIoType<GetMember> = new RecordType<GetMember>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetMember as ActionType.GetMember})},
  },
  changeCase: CaseStyle.SnakeCase,
});
