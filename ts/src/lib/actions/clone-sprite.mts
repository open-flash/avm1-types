import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

export interface CloneSprite extends ActionBase {
  action: ActionType.CloneSprite;
}

export const $CloneSprite: RecordIoType<CloneSprite> = new RecordType<CloneSprite>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.CloneSprite as ActionType.CloneSprite})},
  },
  changeCase: CaseStyle.SnakeCase,
});
