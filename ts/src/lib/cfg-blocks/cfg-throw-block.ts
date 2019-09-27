import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";

export interface CfgThrowBlock {
  type: CfgBlockType.Throw;
  label: CfgLabel;
  actions: CfgAction[];
}

export const $CfgThrowBlock: DocumentIoType<CfgThrowBlock> = new DocumentType<CfgThrowBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.Throw as CfgBlockType.Throw})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
