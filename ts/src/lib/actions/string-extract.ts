import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StringExtract extends ActionBase {
  action: ActionType.StringExtract;
}

export const $StringExtract: RecordIoType<StringExtract> = new RecordType<StringExtract>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StringExtract as ActionType.StringExtract})},
  },
  changeCase: CaseStyle.SnakeCase,
});
