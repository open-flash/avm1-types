import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";
import { $CatchTarget, CatchTarget } from "../catch-target";

export interface Try extends ActionBase {
  action: ActionType.Try;
  try: Uint8Array;
  catch?: Uint8Array;
  catchTarget: CatchTarget;
  finally?: Uint8Array;
}

export const $Try: DocumentIoType<Try> = new DocumentType<Try>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Try as ActionType.Try})},
    try: {type: $Bytes},
    catch: {type: $Bytes, optional: true},
    catchTarget: {type: $CatchTarget},
    finally: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
