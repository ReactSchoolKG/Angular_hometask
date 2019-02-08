import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-bulk-lookup-postcodes',
  templateUrl: './bulk-lookup-postcodes.component.html',
  styleUrls: ['./bulk-lookup-postcodes.component.css']
})
export class BulkLookupPostcodesComponent implements OnInit {
  public search = new FormControl(`  {
    "postcodes" : ["OX49 5NU", "M32 0JG", "NE30 1DP"]
   }`);
  public response : string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.bulkPostcodes(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      );
  }

  ngOnInit() {

  }

}
