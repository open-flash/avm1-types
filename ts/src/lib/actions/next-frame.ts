import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
