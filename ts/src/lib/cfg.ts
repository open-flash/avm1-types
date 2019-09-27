import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CfgBlock, CfgBlock } from "./cfg-block";

export interface Cfg {
  blocks: CfgBlock[];
}

export const $Cfg: DocumentIoType<Cfg> = new DocumentType<Cfg>(() => ({
  properties: {
    blocks: {type: new ArrayType({itemType: $CfgBlock, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
