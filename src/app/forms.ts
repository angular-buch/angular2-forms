import {Component, View} from 'angular2/core';
import {DriverForm} from './components/driver-form/driver-form';


@Component({
  selector: 'forms-app',
})
@View({
  directives: [DriverForm],
  template: `
    <driver-form></driver-form>
  `
})
export class FormsApp { }
