import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;

  // make common validator array
  nameValidators = [Validators.required, Validators.pattern(/^[A-Z][a-z0-9_-]{1,19}$/)];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // create form model
    this.myForm = this.fb.group({
      firstName: ['', this.nameValidators],
      lastName:  ['', this.nameValidators],
      age: ['', [Validators.min(0), Validators.max(120)]],
      children: this.fb.array([])
    })
  }
  
  // display children
  get childForms() {
    return this.myForm.get('children') as FormArray
  }
  
  addChild() {
    const child = this.fb.group({ 
      firstNameCh: ['', this.nameValidators],
      lastNameCh:  ['', this.nameValidators],
    })
    this.childForms.push(child);
  }
  
  deleteChild(i) {
    this.childForms.removeAt(i)
  }

  // objects for styling FormComponent
  f_l_name = {
    'padding' : '10px',
    'display' : 'block',
    'margin' : '10px auto',
    'borderRadius' : '10px',
    'border' : '1px solid #000',
    'fontSize' : '20px',
  }

  buttomControls = {
    'margin': '0 auto',
    'width' : '190px',
  }

  buttomBtn = {
    'padding' : '5px',
    'borderRadius' : '5px',
    'border' : '1px solid #000',
    'margin' : '5px',
  }

  errorBox = {
    'width' : '400px',
    'margin': '30px auto',
    'color' : 'red',
  }

  childInput = {
    'margin' : '7px',
    'borderRadius' : '5px',
    'border' : '1px solid #000',
  }
  
  formValue = {
    'width' : '600px',
    'margin': '30px auto',
    'textAlign' : 'center',
  }
}
