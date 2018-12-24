import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() company: Company;
  @Output() showDescription = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onShow() {
    // tslint:disable-next-line:max-line-length
    this.showDescription.emit(`${this.company.name} has been in ${this.company.industry} industry for ${this.company.durationOfBusiness} years. Company is located in ${this.company.location}. The bussiness activity is ${this.company.isActive ? 'active' : 'inactive'}`);
  }
}
