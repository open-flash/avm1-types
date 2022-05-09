import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface BitAnd extends ActionBase {
  action: ActionType.BitAnd;
}

export const $BitAnd: RecordIoType<BitAnd> = new RecordType<BitAnd>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitAnd as ActionType.BitAnd})},
  },
  changeCase: CaseStyle.SnakeCase,
});
