import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Raw extends ActionBase {
  action: ActionType.Raw;
  code: Uint8;
  data: Uint8Array;
}

export const $Raw: DocumentIoType<Raw> = new DocumentType<Raw>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Raw as const})},
    code: {type: new IntegerType()},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
