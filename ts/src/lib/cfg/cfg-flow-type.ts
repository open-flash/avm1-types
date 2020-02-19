import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

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
  changeCase: CaseStyle.KebabCase,
});
