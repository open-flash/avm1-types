import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface BitOr extends ActionBase {
  action: ActionType.BitOr;
}

export const $BitOr: RecordIoType<BitOr> = new RecordType<BitOr>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitOr as ActionType.BitOr})},
  },
  changeCase: CaseStyle.SnakeCase,
});
