import { Component } from '@angular/core';
import { SchoolModel  } from './model/school';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public schools: SchoolModel []=[
    {name:'Cambridge School', id:1, place:'Cambridge'},
    {name:'University', id:2, place:'Lviv'},
  ];
  public schoolList:object[]=[];
  addSchool(newSchool:object){
    this.schoolList.push(newSchool)
  }
  title = 'List of schools';
}