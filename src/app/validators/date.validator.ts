import {Control} from 'angular2/common';
import {ValidationResult} from './validation-result';


export class DateValidator {

  static isDate(control: Control): ValidationResult {
    let regex_date = /^\d{1,2}\.\d{1,2}\.\d{4}$/;

    if (!regex_date.test(control.value)) {
      return { "isDate": true };
    }

    return null;
  }

}
