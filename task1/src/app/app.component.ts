import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public schools: object[] = [
    {name: 'Cambridge', id: '1', place: 'somewhere'},
    {name: 'KindGeek school', id: '2', place: 'Lviv'}
  ];
  public listOfAddedSchools: object[] = [];
  title = 'my-app';
  addSchool(school: object) {
    console.log(school);
    console.log(this.listOfAddedSchools);
    this.listOfAddedSchools.push(school);
  }
}
