import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16, UintSize } from "semantic-types";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $Parameter, Parameter } from "../parameter";

export interface DefineFunction2 extends ActionBase {
  action: ActionType.DefineFunction2;
  name: string;
  preloadParent: boolean;
  preloadRoot: boolean;
  suppressSuper: boolean;
  preloadSuper: boolean;
  suppressArguments: boolean;
  preloadArguments: boolean;
  suppressThis: boolean;
  preloadThis: boolean;
  preloadGlobal: boolean;
  registerCount: UintSize;
  parameters: Parameter[];
  bodySize: Uint16;
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
    preloadParent: {type: $Boolean},
    preloadRoot: {type: $Boolean},
    suppressSuper: {type: $Boolean},
    preloadSuper: {type: $Boolean},
    suppressArguments: {type: $Boolean},
    preloadArguments: {type: $Boolean},
    suppressThis: {type: $Boolean},
    preloadThis: {type: $Boolean},
    preloadGlobal: {type: $Boolean},
    registerCount: {type: new IntegerType()},
    parameters: {type: new ArrayType({itemType: $Parameter, maxLength: Infinity})},
    bodySize: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
