import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Action, Action } from "./action";
import { $CfgFlow, CfgFlow } from "./cfg-flow";
import { $CfgLabel, CfgLabel } from "./cfg-label";

export interface CfgBlock {
  label: CfgLabel;
  actions: Action[];
  flow: CfgFlow;
}

export const $CfgBlock: DocumentIoType<CfgBlock> = new DocumentType<CfgBlock>(() => ({
  properties: {
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
    flow: {type: $CfgFlow},
  },
  changeCase: CaseStyle.SnakeCase,
}));
