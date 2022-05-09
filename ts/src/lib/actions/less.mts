import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Less extends ActionBase {
  action: ActionType.Less;
}

export const $Less: RecordIoType<Less> = new RecordType<Less>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Less as ActionType.Less})},
  },
  changeCase: CaseStyle.SnakeCase,
});
