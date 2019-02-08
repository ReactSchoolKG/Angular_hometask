import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-nearest-outward-code-for-outward-code',
  templateUrl: './nearest-outward-code-for-outward-code.component.html',
  styleUrls: ['./nearest-outward-code-for-outward-code.component.css']
})
export class NearestOutwardCodeForOutwardCodeComponent implements OnInit {

  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.nearestOutwardCodeForOutward(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }

}
