import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface MbStringLength extends ActionBase {
  action: ActionType.MbStringLength;
}

export const $MbStringLength: RecordIoType<MbStringLength> = new RecordType<MbStringLength>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.MbStringLength as ActionType.MbStringLength})},
  },
  changeCase: CaseStyle.SnakeCase,
});
