import {Component, Input } from '@angular/core';
import {UserModel} from '../../models/user-model';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
  @Input() user: UserModel;
  @Input() index: number;
  constructor(private _users: PeopleService) { }

  delete(index) {
    console.log(index);
    this._users.deleteUser(index);
  }


}
