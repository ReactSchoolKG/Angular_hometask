import { Component } from '@angular/core';
import {SchoolModel} from './models/school-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public schools: SchoolModel[] = [
    {name: 'Cambridge', id: 1, place: 'Cambridge'},
    {name: 'KindGeek school', id: 2, place: 'Lviv'}
  ];

  public schoolList: object[] = [];
  addSchool(addNewSchool: object) {
    this.schoolList.push(addNewSchool);
  }
}
