import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Enumerate extends ActionBase {
  action: ActionType.Enumerate;
}

export const $Enumerate: RecordIoType<Enumerate> = new RecordType<Enumerate>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Enumerate as ActionType.Enumerate})},
  },
  changeCase: CaseStyle.SnakeCase,
});
