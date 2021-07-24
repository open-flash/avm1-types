import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface PreviousFrame extends ActionBase {
  action: ActionType.PreviousFrame;
}

export const $PreviousFrame: RecordIoType<PreviousFrame> = new RecordType<PreviousFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.PreviousFrame as ActionType.PreviousFrame})},
  },
  changeCase: CaseStyle.SnakeCase,
});
