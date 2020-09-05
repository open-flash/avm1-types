import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StringLength extends ActionBase {
  action: ActionType.StringLength;
}

export const $StringLength: RecordIoType<StringLength> = new RecordType<StringLength>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringLength as ActionType.StringLength})},
  },
  changeCase: CaseStyle.SnakeCase,
});
