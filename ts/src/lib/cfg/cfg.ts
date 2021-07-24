import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { RecordIoType, RecordType } from "kryo/record";

import { $CfgBlock, CfgBlock } from "./cfg-block.js";

export interface Cfg {
  // TODO: Type it as being non-empty
  blocks: CfgBlock[];
}

export const $Cfg: RecordIoType<Cfg> = new RecordType<Cfg>(() => ({
  properties: {
    blocks: {type: new ArrayType({itemType: $CfgBlock, minLength: 1, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
