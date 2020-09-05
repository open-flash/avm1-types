import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { Uint8 } from "semantic-types";
import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";
import { $Parameter, Parameter } from "../../parameter.js";
import { $Cfg, Cfg } from "../cfg.js";

export interface DefineFunction2 extends ActionBase {
  action: ActionType.DefineFunction2;
  name: string;
  registerCount: Uint8;
  preloadThis: boolean;
  suppressThis: boolean;
  preloadArguments: boolean;
  suppressArguments: boolean;
  preloadSuper: boolean;
  suppressSuper: boolean;
  preloadRoot: boolean;
  preloadParent: boolean;
  preloadGlobal: boolean;
  parameters: Parameter[];
  body: Cfg;
}

export const $DefineFunction2: RecordIoType<DefineFunction2> = new RecordType<DefineFunction2>(() => ({
  properties: {
    action: {
      type: new LiteralType({
        type: $ActionType,
        value: ActionType.DefineFunction2 as ActionType.DefineFunction2,
      }),
    },
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    registerCount: {type: $Uint8},
    preloadThis: {type: $Boolean},
    suppressThis: {type: $Boolean},
    preloadArguments: {type: $Boolean},
    suppressArguments: {type: $Boolean},
    preloadSuper: {type: $Boolean},
    suppressSuper: {type: $Boolean},
    preloadRoot: {type: $Boolean},
    preloadParent: {type: $Boolean},
    preloadGlobal: {type: $Boolean},
    parameters: {type: new ArrayType({itemType: $Parameter, maxLength: Infinity})},
    body: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
