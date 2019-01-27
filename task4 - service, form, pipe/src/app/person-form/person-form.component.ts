import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  public personForm: FormGroup = this.fb.group({
    firstName:['', this.firstLetterUppercase],
    lastName:['', this.firstLetterUppercase],
    age:['', Validators.compose([Validators.min(0), Validators.max(120)])],
    children:this.fb.array([
      this.fb.group({
        firstName:['', this.firstLetterUppercase],
        lastName:['', this.firstLetterUppercase]
      })
    ])
  });

  public firstLetterUppercase(formControl: AbstractControl): ValidationErrors|null{
    return (/[A-Z]/.test(formControl.value[0]))?null:{firstLetterNoCapitalize:true}
  }

  get children() {
    return this.personForm.get('children') as FormArray;
  }

  addChildren() {
    this.children.push(this.fb.group({
      firstName:['', this.firstLetterUppercase],
      lastName:['', this.firstLetterUppercase]
    }))
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}