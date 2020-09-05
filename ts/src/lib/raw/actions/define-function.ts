import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint16 } from "semantic-types";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

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
