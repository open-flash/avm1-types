import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Action, Action } from "./action";
import { $CfgLabel, CfgLabel } from "./cfg-label";

export interface CfgBlock {
  readonly label: CfgLabel;
  readonly actions: ReadonlyArray<Action>;
  readonly next?: CfgLabel;
}

export const $Block: DocumentIoType<CfgBlock> = new DocumentType<CfgBlock>(() => ({
  properties: {
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
    next: {type: $CfgLabel, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
