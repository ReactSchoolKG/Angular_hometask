import { Component } from '@angular/core';
import { PhoneService } from './services/phone.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public phones$ = this._phone.getPhoneList();
  constructor(private _phone: PhoneService, private fb: FormBuilder) { }

  public phoneForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required]
  });

  addPhone(name, price){
    // this._phone.addPhone(name, price);
  }

}