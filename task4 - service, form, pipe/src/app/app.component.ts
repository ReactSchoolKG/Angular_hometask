import { Component } from '@angular/core';
import { CountryService } from './services/country.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public country$ = this._country.getCountryList();
  constructor(private _country: CountryService, private fb: FormBuilder){ };
  public countryForm: FormGroup = this.fb.group({
    country:['', Validators.required],
    capital:['', Validators.required]
  });

  addCountry(country, capital){
    this._country.addCountry(country, capital);
  }
}
