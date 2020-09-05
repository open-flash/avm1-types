import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
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
