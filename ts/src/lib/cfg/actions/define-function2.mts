import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint8 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";
import { Uint8 } from "semantic-types";

import { ActionBase } from "../../action-base.mjs";
import { $ActionType, ActionType } from "../../action-type.mjs";
import { $Parameter, Parameter } from "../../parameter.mjs";
import { $Cfg, Cfg } from "../cfg.mjs";

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
