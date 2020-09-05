import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface NextFrame extends ActionBase {
  action: ActionType.NextFrame;
}

export const $NextFrame: RecordIoType<NextFrame> = new RecordType<NextFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.NextFrame as ActionType.NextFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
