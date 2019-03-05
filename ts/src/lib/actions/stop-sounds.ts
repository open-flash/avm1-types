import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { ActionBase } from "../action-base";
import { $ActionType, ActionType } from "../action-type";

export interface StopSounds extends ActionBase {
  action: ActionType.StopSounds;
}

export const $StopSounds: DocumentIoType<StopSounds> = new DocumentType<StopSounds>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.StopSounds as ActionType.StopSounds})},
  },
  changeCase: CaseStyle.SnakeCase,
});
