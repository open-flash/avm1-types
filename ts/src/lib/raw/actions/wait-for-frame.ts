import { CaseStyle } from "kryo";
import { $Uint16, IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16, UintSize } from "semantic-types";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface WaitForFrame extends ActionBase {
  action: ActionType.WaitForFrame;
  frame: Uint16;
  skip: UintSize;
}

export const $WaitForFrame: RecordIoType<WaitForFrame> = new RecordType<WaitForFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.WaitForFrame as ActionType.WaitForFrame})},
    frame: {type: $Uint16},
    skip: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
