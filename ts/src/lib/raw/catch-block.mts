import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $CatchTarget, CatchTarget } from "../catch-target.mjs";

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
