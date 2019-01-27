import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors} from '@angular/forms';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  public children: FormArray;

  constructor(private fb: FormBuilder, private _users: PeopleService) {}
  public userForm: FormGroup = this.fb.group({
    firstName: ['', Validators.compose([Validators.required, this.validateName, Validators.minLength(2)])],
    lastName: ['', Validators.compose([Validators.required, this.validateName, Validators.minLength(2)])],
    age: [null , Validators.compose([ Validators.min(0), Validators.max(120), Validators.required])],
    children: this.fb.array([
      this.generateChildrenForm()
    ])
  });

  private generateChildrenForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.compose([Validators.required, this.validateName, Validators.minLength(2)])],
      lastName: ['', Validators.compose([Validators.required, this.validateName, Validators.minLength(2)])],
      age: [null, Validators.compose([ Validators.min(0), Validators.max(120), Validators.required])]
    });
  }

  addChildren(): void {
    this.children = this.userForm.get('children') as FormArray;
    this.children.push(this.generateChildrenForm());
  }

  addUser(): void {
    this._users.addUser(this.userForm.value);
  }

  public validateName(control: AbstractControl): ValidationErrors | null {
    return new RegExp(/^[A-Z]+[a-zA-Z]*$/).test(control.value) ? null : {
      firstUpperCaseLetter : true,
      message: 'First letter must be Upper case!'
    };
  }
}
