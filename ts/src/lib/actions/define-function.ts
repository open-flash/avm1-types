import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface DefineFunction extends ActionBase {
  action: ActionType.DefineFunction;
  name: string;
  parameters: string[];
  body: Uint8Array;
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
    body: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
}));
