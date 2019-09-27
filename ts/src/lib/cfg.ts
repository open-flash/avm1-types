import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CfgBlock, CfgBlock } from "./cfg-block";

export interface Cfg {
  head: CfgBlock;
  tail: CfgBlock[];
}

export const $Cfg: DocumentIoType<Cfg> = new DocumentType<Cfg>(() => ({
  properties: {
    head: {type: $CfgBlock},
    tail: {type: new ArrayType({itemType: $CfgBlock, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
