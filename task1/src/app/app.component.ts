import { Component } from '@angular/core';
import { Company } from './models/company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task1';

  descriptions: string[] = [];

  public companies: Company[] = [
    { name: 'Walmart', industry: 'e-commerce', durationOfBusiness: 10, location: 'USA', isActive: true },
    { name: 'HSBC Holdings', industry: 'finance', durationOfBusiness: 5, location: 'UK', isActive: true },
    { name: 'Sinopec Group', industry: 'energy', durationOfBusiness: 5, location: 'Singapore', isActive: false },
    { name: 'Volkswagen', industry: 'automobile', durationOfBusiness: 13, location: 'Germany', isActive: true },
    { name: 'ICBC', industry: 'banking', durationOfBusiness: 7, location: 'China', isActive: false }
  ];

  public show(description: string) {
    this.descriptions.push(description);
  }





}


