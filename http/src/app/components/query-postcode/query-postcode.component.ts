import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-query-postcode',
  templateUrl: './query-postcode.component.html',
  styleUrls: ['./query-postcode.component.css']
})
export class QueryPostcodeComponent implements OnInit {
  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.queryPostcode(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }

}
