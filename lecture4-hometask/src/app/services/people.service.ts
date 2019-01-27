import { Injectable } from '@angular/core';
import UsersList from '../constants/UsersList';
import {BehaviorSubject, Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private usersStore$: BehaviorSubject<{ firstName: string, lastName: string, age: number, children: Array<Object> }[]>;

  constructor() {
    this.usersStore$ = new BehaviorSubject(UsersList);
  }

  getListOfUsers(): Observable<{ firstName: string, lastName: string, age: number, children: Array<Object> }[]> {
    return this.usersStore$;
  }

  deleteUser(index: number) {
    this.usersStore$.next(this.usersStore$.value.filter((user, i) => i !== index ));
  }

  addUser(user: any) {
    console.log(user);
    this.usersStore$.value.push(user);
  }
}
