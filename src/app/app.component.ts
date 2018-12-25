import { Component } from '@angular/core';
import {School} from "./components/models/school/school"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public schools:School[] = [
    {name: "Cambridge school", id: 777, place:"Cambridge"},
    {name: "Krasnyk school", id: 111, place:"Krasnyk"},
    {name: "Bukovets school", id: 222, place:"Bucovets"},
  ];
  title = 'my-dream-app';

  public ListOfAddedSchools:object[] = [];

  addNewSchool(school:object){
    console.log("try to add school...");
    console.log(this.ListOfAddedSchools);

    this.ListOfAddedSchools.unshift(school);
  }
}
