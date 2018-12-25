
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	public schools: object[]=[
    {name:'NURE', id:0, place:'UA'},
    {name:'MIT', id:1, place:'USA'}
  ];
  public listOfSchools: object[] = [];
  addSchool(school: object) {
    this.listOfSchools.push(school);
  }
}