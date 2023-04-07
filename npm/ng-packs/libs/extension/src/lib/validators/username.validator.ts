import { AbstractControl, ValidatorFn } from '@angular/forms';
import { isUndefinedOrEmptyString } from '@abp/ng.core';
import { AbpValidateErrors } from '../models';

export interface UsernameOptions {
  pattern: RegExp;
}

const onlyLetterAndNumberRegex = /^[a-zA-Z0-9_@#]{4,20}$/;

export function validateUsername(
  { pattern }: UsernameOptions = { pattern: onlyLetterAndNumberRegex }
): ValidatorFn {
  return (control: AbstractControl): AbpValidateErrors | null => {
    const isValid = isValidUserName(control.value, pattern);
    return isValid
      ? null
      : {
          username: {
            'zh-cn': '用户名只能由数字和字符或_@#组成的4到20位字符',
            en: '',
          },
        };
  };
}

function isValidUserName(value: any, pattern: RegExp): boolean {
  if (isUndefinedOrEmptyString(value)) return true;
  return pattern.test(value);
}
