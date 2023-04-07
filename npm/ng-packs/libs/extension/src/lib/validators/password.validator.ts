import { isNullOrUndefined } from '@abp/ng.core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AbpValidateErrors } from '../models';

export interface PasswordOptions {
  pattern: RegExp;
}

// 三级等保的密码，8到32位，至少包含一个数字、一个字母、一个特殊字符构建的密码
const passwordRegex = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{6,32}$/;

export function validatePassword(
  { pattern }: PasswordOptions = { pattern: passwordRegex }
): ValidatorFn {
  return (control: AbstractControl): AbpValidateErrors | null => {
    const isValid = isValidPassword(control.value, pattern);
    return isValid
      ? null
      : {
          password: {
            'zh-cn':
              '密码由至少一个字母、一个数字和一个特殊字符组成的6到32位的字符串',
            en: '',
          },
        };
  };
}

function isValidPassword(value: any, pattern: RegExp): boolean {
  if (isNullOrUndefined(value)) return false;
  return pattern.test(value);
}
