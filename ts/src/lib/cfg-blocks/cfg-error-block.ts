import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { $CfgLabel, CfgLabel } from "../cfg-label";
import { $InvalidActionError, InvalidActionError } from "../invalid-action-error";

export interface CfgErrorBlock {
  type: CfgBlockType.Error;
  label: CfgLabel;
  actions: CfgAction[];
  error?: InvalidActionError;
}

export const $CfgErrorBlock: DocumentIoType<CfgErrorBlock> = new DocumentType<CfgErrorBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.Error as CfgBlockType.Error})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
    error: {type: $InvalidActionError, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
