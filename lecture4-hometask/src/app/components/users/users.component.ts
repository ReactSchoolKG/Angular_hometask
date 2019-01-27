import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users$;

  constructor(private _users: PeopleService) {
    this.users$ = _users.getListOfUsers();
  }

}
