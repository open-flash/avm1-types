import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface BitXor extends ActionBase {
  action: ActionType.BitXor;
}

export const $BitXor: RecordIoType<BitXor> = new RecordType<BitXor>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.BitXor as ActionType.BitXor})},
  },
  changeCase: CaseStyle.SnakeCase,
});
