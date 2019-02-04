import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-bulk-lookup',
  templateUrl: './bulk-lookup.component.html',
  styleUrls: ['./bulk-lookup.component.css']
})
export class BulkLookupComponent implements OnInit {
  
  public searchControl = new FormControl(`{"postcodes" : ["OX49 5NU", "M32 0JG", "NE30 1DP"]}`);
  responce;

  constructor(private httpService: HttpService) { }

  handleRequest(){
    this.httpService.bulkLookupPostcode(this.searchControl.value)
    .subscribe(
      res => {
        console.log('Server responce: ', res);
        this.responce = {status: res.status, result:res.result}
      },
      err => {
        console.log('ERROR!: ', err);
        this.responce = {status: err.status, error:err.message}
    });
  }

  ngOnInit() {
  }

}
