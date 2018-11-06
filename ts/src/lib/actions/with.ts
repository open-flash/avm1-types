import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface With extends ActionBase {
  action: ActionType.With;
  with: Uint8Array;
}

export const $With: DocumentIoType<With> = new DocumentType<With>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.With as ActionType.With})},
    with: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
}));
