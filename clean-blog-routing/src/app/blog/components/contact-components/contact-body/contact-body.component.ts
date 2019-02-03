import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-body',
  templateUrl: './contact-body.component.html',
  styleUrls: ['./contact-body.component.scss']
})
export class ContactBodyComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public contactForm: FormGroup = this.fb.group({
    name: ['',  Validators.compose([Validators.required, Validators.minLength(4)])],
    email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
    phone: ['', Validators.compose([Validators.required, Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')])],
    message: ['', Validators.required]
  })

  get name() { return this.contactForm.get('name'); };

  get email() { return this.contactForm.get('email'); };

  get phone() { return this.contactForm.get('phone'); };

  get message() { return this.contactForm.get('message'); };

  ngOnInit() {
    
  }

}


