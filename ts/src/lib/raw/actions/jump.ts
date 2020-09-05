import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { SintSize } from "semantic-types";
import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface Jump extends ActionBase {
  action: ActionType.Jump;
  offset: SintSize;
}

export const $Jump: RecordIoType<Jump> = new RecordType<Jump>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Jump as ActionType.Jump})},
    offset: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
