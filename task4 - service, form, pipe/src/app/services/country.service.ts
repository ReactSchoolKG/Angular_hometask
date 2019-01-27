import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }
  private store$: BehaviorSubject<{country: string, capital: string}[]> = new BehaviorSubject(
    [{country: 'Ukraine', capital: 'Kyiv'},
    {country: 'Great Britain', capital: 'London'},
    {country: 'Germany', capital: 'Berlin'}]);

  getCountryList(): Observable<{country: string, capital: string}[]>{
    return this.store$;
  }

  addCountry(newCountry, newCapital){
    const currentCountryList = this.store$.value;
    const updatedCounrtyList = [...currentCountryList, {country: newCountry, capital: newCapital}];
    this.store$.next(updatedCounrtyList);
  }
}
