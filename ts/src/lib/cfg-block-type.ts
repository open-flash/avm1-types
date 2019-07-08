import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum CfgBlockType {
  Simple,
  End,
  Return,
  Throw,
}

export const $CfgBlockType: TsEnumType<CfgBlockType> = new TsEnumType<CfgBlockType>({
  enum: CfgBlockType,
  changeCase: CaseStyle.KebabCase,
});
