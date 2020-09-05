import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";
import { $CatchBlock, CatchBlock } from "../catch-block.js";

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
