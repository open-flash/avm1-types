import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { UintSize } from "semantic-types";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GotoFrame2 extends ActionBase {
  action: ActionType.GotoFrame2;
  play: boolean;
  sceneBias: UintSize;
}

export const $GotoFrame2: RecordIoType<GotoFrame2> = new RecordType<GotoFrame2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GotoFrame2 as ActionType.GotoFrame2})},
    play: {type: $Boolean},
    sceneBias: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
