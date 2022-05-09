import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { ActionBase } from "../action-base.mjs";
import { $ActionType, ActionType } from "../action-type.mjs";

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
