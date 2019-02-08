import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-lookup-outward-code',
  templateUrl: './lookup-outward-code.component.html',
  styleUrls: ['./lookup-outward-code.component.css']
})
export class LookupOutwardCodeComponent implements OnInit {

  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.outwardCode(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      );
  }

  ngOnInit() {
  }

}
