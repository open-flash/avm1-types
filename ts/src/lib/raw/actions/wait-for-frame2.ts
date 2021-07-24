import { CaseStyle } from "kryo";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { UintSize } from "semantic-types";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface WaitForFrame2 extends ActionBase {
  action: ActionType.WaitForFrame2;
  skip: UintSize;
}

export const $WaitForFrame2: RecordIoType<WaitForFrame2> = new RecordType<WaitForFrame2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.WaitForFrame2 as ActionType.WaitForFrame2})},
    skip: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
