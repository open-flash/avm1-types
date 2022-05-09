import { CaseStyle } from "kryo";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { SintSize } from "semantic-types";

import { ActionBase } from "../../action-base.mjs";
import { $ActionType, ActionType } from "../../action-type.mjs";

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
