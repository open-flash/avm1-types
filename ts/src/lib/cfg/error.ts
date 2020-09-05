import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
