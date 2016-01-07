import {Component} from 'angular2/core';
import {Control, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'user-form',
  templateUrl: 'app/components/user-form/user-form.html',
  styleUrls: ['app/components/user-form/user-form.css']
})
export class UserForm {
  userForm: ControlGroup;
  nameControl: Control;
  emailControl: Control;

  constructor() {
    this.nameControl = new Control('John', Validators.minLength(2));
    this.emailControl = new Control('john@doe.de', Validators.required);

    this.userForm = new ControlGroup({
      name  : this.nameControl,
      email : this.emailControl
    });
  }
}
