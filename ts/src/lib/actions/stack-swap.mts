import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface StackSwap extends ActionBase {
  action: ActionType.StackSwap;
}

export const $StackSwap: RecordIoType<StackSwap> = new RecordType<StackSwap>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StackSwap as ActionType.StackSwap})},
  },
  changeCase: CaseStyle.SnakeCase,
});
