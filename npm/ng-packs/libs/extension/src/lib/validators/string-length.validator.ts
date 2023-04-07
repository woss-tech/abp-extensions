import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AbpValidateErrors } from '../models';

export interface StringLengthOptions {
  maximumLength?: number;
  minimumLength?: number;
}

export function validateStringLength({
  maximumLength = Infinity,
  minimumLength = 0,
}: StringLengthOptions = {}): ValidatorFn {
  return (control: AbstractControl): AbpValidateErrors | null => {
    if (['', null, undefined].indexOf(control.value) > -1) return null;

    const value = String(control.value);

    return (
      getMinLengthError(value, minimumLength) ||
      getMaxLengthError(value, maximumLength)
    );
  };
}

function getMaxLengthError(
  value: string,
  requiredLength: number
): AbpValidateErrors | null {
  return value.length > requiredLength
    ? {
        stringLength: {
          'zh-cn': `字符串长度不能超过${requiredLength}个字符`,
          en: '',
        },
      }
    : null;
}

function getMinLengthError(
  value: string,
  requiredLength: number
): AbpValidateErrors | null {
  return value.length < requiredLength
    ? {
        stringLength: {
          'zh-cn': `字符串长度不能小于${requiredLength}个字符`,
          en: '',
        },
      }
    : null;
}
