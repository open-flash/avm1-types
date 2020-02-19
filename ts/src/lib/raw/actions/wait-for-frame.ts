import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint16, UintSize } from "semantic-types";
import { ActionBase } from "../../action-base";
import { $ActionType, ActionType } from "../../action-type";

export interface WaitForFrame extends ActionBase {
  action: ActionType.WaitForFrame;
  frame: Uint16;
  skip: UintSize;
}

export const $WaitForFrame: DocumentIoType<WaitForFrame> = new DocumentType<WaitForFrame>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.WaitForFrame as ActionType.WaitForFrame})},
    frame: {type: $Uint16},
    skip: {type: new IntegerType()},
  },
  changeCase: CaseStyle.SnakeCase,
});
