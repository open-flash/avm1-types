import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { ActionBase } from "../../action-base";
import { $ActionType, ActionType } from "../../action-type";
import { $CatchBlock, CatchBlock } from "../catch-block";

export interface Try extends ActionBase {
  action: ActionType.Try;
  try: Uint16;
  catch?: CatchBlock;
  finally?: Uint16;
}

export const $Try: DocumentIoType<Try> = new DocumentType<Try>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Try as ActionType.Try})},
    try: {type: $Uint16},
    catch: {type: $CatchBlock, optional: true},
    finally: {type: $Uint16, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
