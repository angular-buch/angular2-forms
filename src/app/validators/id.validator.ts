import {Control} from 'angular2/common';

interface ValidationResult{
   [key:string]:boolean;
}

export class IdValidator {
 
 static isIdAlreadyInUse(control: Control): Promise<ValidationResult> {
 
   return new Promise((resolve, reject) => {
     setTimeout(() => {
       if (control.value === 'MS') {
         resolve({'isIdAlreadyInUse': true});
       } else {
         resolve(null);
       };
     }, 1000)
   });

 }
 
}
