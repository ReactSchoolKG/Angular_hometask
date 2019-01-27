import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public signupForm: FormGroup;
  public children: FormArray;
  public radius: number;
  public hex: any;
  constructor(@Inject(FormBuilder) private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
      lastName: ['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
      age: ['', Validators.compose([Validators.min(0), Validators.max(120)])],
      children: this.fb.array([this.createChild()])

    });
  }

  onSubmit() {
    console.log(this.signupForm.value, 'value');
    this.userService.addUser(this.signupForm.value);
    console.log(this.userService.getUsers(), 'users');
    this.signupForm.reset();
  }

  createChild(): FormGroup {
    return this.fb.group({
      name: '',
      surname: ''
    });
  }

  addChild(): void {
    this.children = this.signupForm.get('children') as FormArray;
    this.children.push(this.createChild());
  }

  onKey(event: any) {
    this.radius = +event.target.value;
  }

  onKeyHex(hex: any) {
    this.hex = event.target.value;
  }

}
