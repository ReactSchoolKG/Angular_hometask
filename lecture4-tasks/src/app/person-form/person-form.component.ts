import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
  children: new FormArray([
    // firstName: new FormControl(''),
    // lastName: new FormControl('')
    new FormControl(null)
  ])
  });

  constructor() { }

  ngOnInit(){  
  }

}
