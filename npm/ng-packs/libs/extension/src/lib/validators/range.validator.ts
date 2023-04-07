import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AbpValidateErrors } from '../models';

export interface RangeOptions {
  maximum?: number;
  minimum?: number;
}

export function validateRange({
  maximum = Infinity,
  minimum = 0,
}: RangeOptions = {}): ValidatorFn {
  return (control: AbstractControl): AbpValidateErrors | null => {
    if (['', null, undefined].indexOf(control.value) > -1) return null;

    const value = Number(control.value);
    return (
      getMinError(value, minimum, maximum) ||
      getMaxError(value, maximum, minimum)
    );
  };
}

function getMaxError(
  value: number,
  max: number,
  _min: number
): AbpValidateErrors | null {
  return value > max
    ? { range: { 'zh-cn': `数值不能大于${max}`, en: '' } }
    : null;
}

function getMinError(
  value: number,
  min: number,
  _max: number
): AbpValidateErrors | null {
  return value < min
    ? { range: { 'zh-cn': `数值不能小于${min}`, en: '' } }
    : null;
}
