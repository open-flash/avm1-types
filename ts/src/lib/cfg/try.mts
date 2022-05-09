import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $CatchBlock, CatchBlock } from "./catch-block.mjs";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.mjs";
import { $Cfg, Cfg } from "./cfg.mjs";

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
