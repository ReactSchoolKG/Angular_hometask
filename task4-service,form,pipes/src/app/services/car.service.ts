import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }
  
  private store$: BehaviorSubject<{brand: string, model: string}[]> = new BehaviorSubject(
    [{brand: 'Tesla', model: 'X'},
     {brand: 'Tesla', model: 'S'},
     {brand: 'Ford', model: 'Kuga'},
     {brand: 'Audi', model: 'A4'},
     {brand: 'BMW', model: 'M5'}]);

  
  getCarList(): Observable<{brand: string, model: string}[]> {
    return this.store$;
  };

  deleteCar(deleteModel) {
    this.store$.next(this.store$.value.filter(({ model }) => model !== deleteModel));
  };

  addCar(newBrand, newModel){
    const currentCarList = this.store$.value;
    const updatedCarList = [...currentCarList, {brand: newBrand, model: newModel}];
    this.store$.next(updatedCarList); 
  };
}

