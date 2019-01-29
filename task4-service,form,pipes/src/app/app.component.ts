import { CarService } from './services/car.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public car$ = this._car.getCarList();
 constructor (private _car: CarService, private fb: FormBuilder){};
 public carForm: FormGroup = this.fb.group({
   brand: ['', Validators.required],
   model: ['', Validators.required]
 });

 addCar(brand, model) {
   this._car.addCar(brand, model);
 };

 deleteCar({ model }) {
  this._car.deleteCar(model);
 };

}
