import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $InvalidActionError, InvalidActionError } from "../invalid-action-error.js";
import { $CfgBlockType, CfgFlowType } from "./cfg-flow-type.js";

export interface Error {
  type: CfgFlowType.Error;
  error?: InvalidActionError;
}

export const $Error: RecordIoType<Error> = new RecordType<Error>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgFlowType.Error as CfgFlowType.Error})},
    error: {type: $InvalidActionError, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
}));
