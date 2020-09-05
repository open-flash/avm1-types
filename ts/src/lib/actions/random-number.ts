import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface RandomNumber extends ActionBase {
  action: ActionType.RandomNumber;
}

export const $RandomNumber: RecordIoType<RandomNumber> = new RecordType<RandomNumber>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.RandomNumber as ActionType.RandomNumber})},
  },
  changeCase: CaseStyle.SnakeCase,
});
