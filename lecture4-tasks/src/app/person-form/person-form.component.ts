import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  public profileForm: FormGroup = this.fb.group({
    firstName: ['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
    lastName: ['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
    age: ['', Validators.compose([Validators.min(0), Validators.max(120)])],
    children: this.fb.array([ this.fb.group({
      firstName:['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
      lastName:['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)]
    })]),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(){  
  }

  get children() {
    return this.profileForm.get('children') as FormArray;
  }

  addChildren() {
    this.children.push(this.fb.group({
      firstName:['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)],
      lastName:['', Validators.pattern(/^[A-Z]+[a-zA-Z]*$/)]
    }));
  }

  delete(index: number) {
    this.children.removeAt(index);
  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }
}