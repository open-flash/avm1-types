import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $CatchTarget, CatchTarget } from "../catch-target.js";

export interface CatchBlock {
  target: CatchTarget;
  size: Uint16;
}

export const $CatchBlock: RecordIoType<CatchBlock> = new RecordType<CatchBlock>(() => ({
  properties: {
    target: {type: $CatchTarget},
    size: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
