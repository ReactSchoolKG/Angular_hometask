import { FormGroup, Validators, FormBuilder, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {}

  
  public personForm: FormGroup = this.fb.group({
    firstName: ['', this.checkUppercase],
    lastName: ['', this.checkUppercase],
    age:['', Validators.compose([Validators.min(0), Validators.max(120)])],
    children: this.fb.array([
      this.fb.group({
        firstName:['', this.checkUppercase],
        lastName:['', this.checkUppercase],
        age:['', Validators.compose([Validators.min(0), Validators.max(120)])]
      })
    ])
  })

  get children() {
    return this.personForm.get('children') as FormArray;
  };

  addChild() {
    this.children.push(this.fb.group({
      firstName:['', this.checkUppercase],
      lastName:['', this.checkUppercase],
      age:['', Validators.compose([Validators.min(0), Validators.max(120)])]
    }));
  };

  public checkUppercase(control: AbstractControl): ValidationErrors | null{
    return (/[A-Z]/.test(control.value[0])) ? null : { firstLetterNotUppercase:true };
  }

}
