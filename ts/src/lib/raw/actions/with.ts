import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { ActionBase } from "../../action-base.js";
import { $ActionType, ActionType } from "../../action-type.js";

export interface With extends ActionBase {
  action: ActionType.With;
  size: Uint16;
}

export const $With: RecordIoType<With> = new RecordType<With>(() => ({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.With as ActionType.With})},
    size: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
}));
