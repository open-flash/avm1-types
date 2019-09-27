import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";

export interface CfgReturnBlock {
  type: CfgBlockType.Return;
  label: CfgLabel;
  actions: CfgAction[];
}

export const $CfgReturnBlock: DocumentIoType<CfgReturnBlock> = new DocumentType<CfgReturnBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.Return as CfgBlockType.Return})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));
