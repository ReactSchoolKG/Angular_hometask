import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-lookup-postcode',
  templateUrl: './lookup-postcode.component.html',
  styleUrls: ['./lookup-postcode.component.css']
})
export class LookupPostcodeComponent implements OnInit {

  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.postcode(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }
}