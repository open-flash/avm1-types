import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Cfg, Cfg } from "../cfg";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";

export interface CfgWithBlock {
  type: CfgBlockType.With;
  label: CfgLabel;
  actions: CfgAction[];
  with: Cfg;
}

export const $CfgWithBlock: DocumentIoType<CfgWithBlock> = new DocumentType<CfgWithBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.With as CfgBlockType.With})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    with: {type: $Cfg},
  },
  changeCase: CaseStyle.SnakeCase,
}));
