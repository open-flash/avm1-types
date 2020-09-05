import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";

export interface MbStringExtract extends ActionBase {
  action: ActionType.MbStringExtract;
}

export const $MbStringExtract: RecordIoType<MbStringExtract> = new RecordType<MbStringExtract>({
  properties: {
    action: {
      type: new LiteralType({
        type: $ActionType,
        value: ActionType.MbStringExtract as ActionType.MbStringExtract,
      }),
    },
  },
  changeCase: CaseStyle.SnakeCase,
});
