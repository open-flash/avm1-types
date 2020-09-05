import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface GotoLabel extends ActionBase {
  action: ActionType.GotoLabel;
  label: string;
}

export const $GotoLabel: RecordIoType<GotoLabel> = new RecordType<GotoLabel>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GotoLabel as ActionType.GotoLabel})},
    label: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
