import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/record";

import { $CatchTarget, CatchTarget } from "../catch-target.mjs";
import { $Cfg, Cfg } from "./cfg.mjs";

export interface CatchBlock {
  target: CatchTarget;
  body: Cfg;
}

export const $CatchBlock: RecordIoType<CatchBlock> = new RecordType<CatchBlock>(() => ({
  properties: {
    target: {type: $CatchTarget},
    body: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
