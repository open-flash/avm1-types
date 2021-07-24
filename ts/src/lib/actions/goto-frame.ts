import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GotoFrame extends ActionBase {
  action: ActionType.GotoFrame;
  frame: Uint16;
}

export const $GotoFrame: RecordIoType<GotoFrame> = new RecordType<GotoFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GotoFrame as ActionType.GotoFrame})},
    frame: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
