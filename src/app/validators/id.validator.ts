import {Control} from 'angular2/common';
import {ValidationResult} from './validation-result';

export class IdValidator {

 static uniqueId(control: Control): Promise<ValidationResult> {

   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (control.value === 'MS')
         resolve({'uniqueId': true});
       else
         resolve(null);
     }, 1000)
   });
 }
}
