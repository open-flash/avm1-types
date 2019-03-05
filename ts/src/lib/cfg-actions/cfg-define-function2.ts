import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { UintSize } from "semantic-types";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $Cfg, Cfg } from "../cfg";
import { $Parameter, Parameter } from "../parameter";

export interface CfgDefineFunction2 extends ActionBase {
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
  body: Cfg;
}

export const $CfgDefineFunction2: DocumentIoType<CfgDefineFunction2> = new DocumentType<CfgDefineFunction2>(() => ({
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
    body: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
