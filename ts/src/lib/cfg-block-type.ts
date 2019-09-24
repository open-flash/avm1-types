import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum CfgBlockType {
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

export const $CfgBlockType: TsEnumType<CfgBlockType> = new TsEnumType<CfgBlockType>({
  enum: CfgBlockType,
  changeCase: CaseStyle.KebabCase,
});
