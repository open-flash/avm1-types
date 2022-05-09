import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint16 } from "semantic-types";

import { ActionBase } from "../../action-base.mjs";
import { $ActionType, ActionType } from "../../action-type.mjs";

export interface DefineFunction extends ActionBase {
  action: ActionType.DefineFunction;
  name: string;
  parameters: string[];
  bodySize: Uint16;
}

export const $DefineFunction: RecordIoType<DefineFunction> = new RecordType<DefineFunction>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.DefineFunction as ActionType.DefineFunction})},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    parameters: {
      type: new ArrayType({
        itemType: new Ucs2StringType({maxLength: Infinity}),
        maxLength: Infinity,
      }),
    },
    bodySize: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
