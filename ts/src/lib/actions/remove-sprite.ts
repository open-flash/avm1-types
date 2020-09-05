import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface RemoveSprite extends ActionBase {
  action: ActionType.RemoveSprite;
}

export const $RemoveSprite: RecordIoType<RemoveSprite> = new RecordType<RemoveSprite>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.RemoveSprite as ActionType.RemoveSprite})},
  },
  changeCase: CaseStyle.SnakeCase,
});
