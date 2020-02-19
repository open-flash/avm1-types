import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { ActionBase } from "../../action-base";
import { $ActionType, ActionType } from "../../action-type";

export interface DefineFunction extends ActionBase {
  action: ActionType.DefineFunction;
  name: string;
  parameters: string[];
  bodySize: Uint16;
}

export const $DefineFunction: DocumentIoType<DefineFunction> = new DocumentType<DefineFunction>(() => ({
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
