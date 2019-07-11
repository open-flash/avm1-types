import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $CatchTarget, CatchTarget } from "../catch-target";

export interface Try extends ActionBase {
  action: ActionType.Try;
  trySize: Uint16;
  catchSize?: Uint16;
  catchTarget: CatchTarget;
  finallySize?: Uint16;
}

export const $Try: DocumentIoType<Try> = new DocumentType<Try>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Try as ActionType.Try})},
    trySize: {type: $Uint16},
    catchSize: {type: $Uint16, optional: true},
    catchTarget: {type: $CatchTarget},
    finallySize: {type: $Uint16, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
