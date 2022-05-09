import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

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
