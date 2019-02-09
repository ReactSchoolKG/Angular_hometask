import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor() { }

  private store$: BehaviorSubject<{ name: string, price: number }[]> = new BehaviorSubject([
    { name:"Apple iPhone 7", price: 500},
    { name: "HP Elite x3", price: 400},
    { name: "Alcatel Idol S4", price: 300}
  ]);

  getPhoneList(): Observable<{ name: string, price: number }[]> {
    return this.store$;
  }

  addPhone(addName: string, addPrice: number){
  }

}