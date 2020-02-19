import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { ActionBase } from "../../action-base";
import { $ActionType, ActionType } from "../../action-type";

export interface With extends ActionBase {
  action: ActionType.With;
  size: Uint16;
}

export const $With: DocumentIoType<With> = new DocumentType<With>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.With as ActionType.With})},
    size: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
