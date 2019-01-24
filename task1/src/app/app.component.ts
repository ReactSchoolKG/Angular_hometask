import { Component } from '@angular/core';
import { School } from './models/school'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task1';

  public schools: School[] = [
    {name: 'Cambridge school', id: 1, country: 'United Kingdom'},
    {name: 'Oxford school', id: 2, country: 'United Kingdom'},
    {name: 'Harvard school', id: 3, country: 'USA'}
  ];

  public schoolList: string[] = [];

  addNewSchool(school: string) {
    this.schoolList.push(school);
  }



}
