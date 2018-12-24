import { Component } from '@angular/core';
import { School } from './models/school';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public schools: School[]=[
    {name:'Cambridge School', id:1, place:'Cambridge, UK'},
    {name:'Harvard University', id:2, place:'Massachusetts, USA'}
  ];
  public schoolList:object[]=[];
  addSchool(newSchool:object){
    this.schoolList.push(newSchool)
  }
}
