import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum PushValueType {
  Boolean,
  Constant,
  Float32,
  Float64,
  Null,
  Register,
  Sint32,
  String,
  Undefined,
}

export const $PushValueType: TsEnumType<PushValueType> = new TsEnumType<PushValueType>({
  enum: PushValueType,
  changeCase: CaseStyle.PascalCase,
});
