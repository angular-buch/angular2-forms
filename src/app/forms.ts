import {Component, View} from 'angular2/core';
import {UserForm} from './components/user-form/user-form';
import {DriverForm} from './components/driver-form/driver-form';


@Component({
  selector: 'forms-app',
})
@View({
  directives: [UserForm, DriverForm],
  template: `
    <user-form></user-form>
    <hr>
    <driver-form></driver-form>
  `
})
export class FormsApp { }
