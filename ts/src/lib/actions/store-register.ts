import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8 } from "semantic-types";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface StoreRegister extends ActionBase {
  action: ActionType.StoreRegister;
  register: Uint8;
}

export const $StoreRegister: RecordIoType<StoreRegister> = new RecordType<StoreRegister>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StoreRegister as ActionType.StoreRegister})},
    register: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
