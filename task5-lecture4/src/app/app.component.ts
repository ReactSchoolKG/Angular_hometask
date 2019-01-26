import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public signupForm: FormGroup;
  public children: FormArray;
  constructor(@Inject(FormBuilder) private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
      lastName: ['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
      age: ['', Validators.compose([Validators.min(0), Validators.max(120)])],
      children: this.fb.array([this.createChildren()])

    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  createChildren(): FormGroup {
    return this.fb.group({
      name: '',
      surname: ''
    });
  }

  addChildren(): void {
    this.children = this.signupForm.get('children') as FormArray;
    this.children.push(this.createChildren());
  }

}
