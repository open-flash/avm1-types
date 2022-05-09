import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8 } from "semantic-types";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface Raw extends ActionBase {
  action: ActionType.Raw;
  code: Uint8;
  data: Uint8Array;
}

export const $Raw: RecordIoType<Raw> = new RecordType<Raw>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Raw as const})},
    code: {type: new IntegerType()},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
