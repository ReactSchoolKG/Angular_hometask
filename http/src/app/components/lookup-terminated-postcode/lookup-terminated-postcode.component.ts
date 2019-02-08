import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-lookup-terminated-postcode',
  templateUrl: './lookup-terminated-postcode.component.html',
  styleUrls: ['./lookup-terminated-postcode.component.css']
})
export class LookupTerminatedPostcodeComponent implements OnInit {

  public search= new FormControl('');
  public response: string

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.terminatedPostcode(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }

}
