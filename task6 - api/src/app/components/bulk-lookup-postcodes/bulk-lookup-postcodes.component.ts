import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-bulk-lookup-postcodes',
  templateUrl: './bulk-lookup-postcodes.component.html',
  styleUrls: ['./bulk-lookup-postcodes.component.css']
})
export class BulkLookupPostcodesComponent implements OnInit {
  public searchControl = new FormControl(`{
    "postcodes" : ["OX49 5NU", "M32 0JG", "NE30 1DP"]
    }`);
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.bulkPostcode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err));
  }

  ngOnInit(){

  }

}
