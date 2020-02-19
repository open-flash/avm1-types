import { $Boolean } from "kryo/builtins/boolean";
import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint8 } from "semantic-types";
import { ActionBase } from "../../action-base";
import { $ActionType, ActionType } from "../../action-type";
import { $Parameter, Parameter } from "../../parameter";
import { $Cfg, Cfg } from "../cfg";

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

export const $DefineFunction2: DocumentIoType<DefineFunction2> = new DocumentType<DefineFunction2>(() => ({
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
