import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $CatchTarget, CatchTarget } from "../catch-target.js";
import { $Cfg, Cfg } from "./cfg.js";

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
