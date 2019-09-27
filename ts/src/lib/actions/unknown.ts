import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface Unknown extends ActionBase {
  action: ActionType.Unknown;
  code: Uint8;
  data: Uint8Array;
}

export const $Unknown: DocumentIoType<Unknown> = new DocumentType<Unknown>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Unknown as ActionType.Unknown})},
    code: {type: new IntegerType()},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
