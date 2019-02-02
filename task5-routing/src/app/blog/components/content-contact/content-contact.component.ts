import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';


@Component({
  selector: 'app-content-contact',
  templateUrl: './content-contact.component.html',
  styleUrls: ['./content-contact.component.css']
})
export class ContentContactComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  contactForm: FormGroup;

  ngOnInit() {
    // create form model
    this.contactForm = this.fb.group({
      name: ['', Validators.required, Validators.pattern(/^[A-Z][a-z0-9_-]{1,19}$/)],
      email:  ['', Validators.email],
      phone: ['', [Validators.pattern(/[0-9]{10}/)]],
      message: [''],
    })
  }
}
