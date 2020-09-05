import { CaseStyle } from "kryo";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { SintSize } from "semantic-types";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface If extends ActionBase {
  action: ActionType.If;
  offset: SintSize;
}

export const $If: RecordIoType<If> = new RecordType<If>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.If as ActionType.If})},
    offset: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
