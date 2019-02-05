import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-nearest-outward-code',
  templateUrl: './nearest-outward-code.component.html',
  styleUrls: ['./nearest-outward-code.component.css']
})
export class NearestOutwardCodeComponent implements OnInit {
  public searchControl = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.nearestOutwardCode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }
  ngOnInit() {
  }

}
