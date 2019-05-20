import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { Uint8 } from "semantic-types";
import { $Uint8 } from "kryo/builtins/uint8";

export interface StrictMode extends ActionBase {
  action: ActionType.StrictMode;
  mode: Uint8;
}

export const $StrictMode: DocumentIoType<StrictMode> = new DocumentType<StrictMode>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StrictMode as ActionType.StrictMode})},
    mode: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
