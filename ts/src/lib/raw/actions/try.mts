import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { ActionBase } from "../../action-base.mjs";
import { $ActionType, ActionType } from "../../action-type.mjs";
import { $CatchBlock, CatchBlock } from "../catch-block.mjs";

export interface Try extends ActionBase {
  action: ActionType.Try;
  try: Uint16;
  catch?: CatchBlock;
  finally?: Uint16;
}

export const $Try: RecordIoType<Try> = new RecordType<Try>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.Try as ActionType.Try})},
    try: {type: $Uint16},
    catch: {type: $CatchBlock, optional: true},
    finally: {type: $Uint16, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
