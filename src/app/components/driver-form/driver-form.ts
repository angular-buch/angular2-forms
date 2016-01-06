import {Component} from 'angular2/core';
import {Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {DateValidator} from '../../validators/date.validator'
import {IdValidator} from '../../validators/id.validator'
import {Driver} from '../../models/driver';

@Component({
  selector: 'driver-form',
  templateUrl: 'app/components/driver-form/driver-form.html',
  styleUrls:  ['app/components/driver-form/driver-form.css'],
})
export class DriverForm {
  driverForm: ControlGroup;
  
  types = ['Formel 1', 'Stock Car Rennen', 'Rallye', 'Kartsport'];
  driver = new Driver('MS', 'Nico', 'Rossberg', '27.07.1985');
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    
    this.driverForm = fb.group({
      'id':        ['', Validators.required, IdValidator.isIdAlreadyInUse],
      'firstName': ['', Validators.compose([Validators.required,
                                            Validators.minLength(2)])],
      'lastName' : ['', Validators.required],
      'birthdate': ['', DateValidator.isDate],
      'type':      ['', Validators.required]
    });
  }
  
  onSubmit() { 
    this.submitted = true; 
  }

  get diagnostic() { return JSON.stringify(this.driver); }
}
