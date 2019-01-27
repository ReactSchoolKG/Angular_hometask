import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();

  }

  showUsers() {
    this.users = this.userService.getUsers();
  }

}
