import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface CloneSprite extends ActionBase {
  action: ActionType.CloneSprite;
}

export const $CloneSprite: RecordIoType<CloneSprite> = new RecordType<CloneSprite>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CloneSprite as ActionType.CloneSprite})},
  },
  changeCase: CaseStyle.SnakeCase,
});
