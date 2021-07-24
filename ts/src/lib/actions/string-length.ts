import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
