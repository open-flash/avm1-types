import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum CfgFlowType {
  Error,
  If,
  Return,
  Simple,
  Throw,
  Try,
  WaitForFrame,
  WaitForFrame2,
  With,
}

export const $CfgBlockType: TsEnumType<CfgFlowType> = new TsEnumType<CfgFlowType>({
  enum: CfgFlowType,
  changeCase: CaseStyle.PascalCase,
});
