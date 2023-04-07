import { validateRequired } from '@abp/ng.core';
import { validateUrl } from '@abp/ng.core';
import { validatePassword } from './password.validator';
import { validateRange } from './range.validator';
import { validateStringLength } from './string-length.validator';
import { validateUsername } from './username.validator';
export * from './password.validator';
export * from './username.validator';
export * from './range.validator';
export * from './string-length.validator';

export const AbpValidators = {
  range: validateRange,
  required: validateRequired,
  stringLength: validateStringLength,
  url: validateUrl,
  password: validatePassword,
  username: validateUsername,
};
