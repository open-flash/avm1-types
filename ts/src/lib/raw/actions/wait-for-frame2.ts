import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
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
