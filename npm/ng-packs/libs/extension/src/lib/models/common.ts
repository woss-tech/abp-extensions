import { NzSafeAny } from 'ng-zorro-antd/core/types';

export type AbpErrorOptions = { 'zh-cn': string; en: string } & Record<
  string,
  NzSafeAny
>;

export type AbpValidateErrors = Record<string, AbpErrorOptions>;
