import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $CatchBlock, CatchBlock } from "./catch-block.js";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";
import { $Cfg, Cfg } from "./cfg.js";

export interface Try {
  type: CfgFlowType.Try;
  try: Cfg;
  catch?: CatchBlock;
  finally?: Cfg;
}

export const $Try: RecordIoType<Try> = new RecordType<Try>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Try as CfgFlowType.Try})},
    try: {type: $Cfg},
    catch: {type: $CatchBlock, optional: true},
    finally: {type: $Cfg, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
