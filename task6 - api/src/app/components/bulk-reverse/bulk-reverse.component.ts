import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service'

@Component({
  selector: 'app-bulk-reverse',
  templateUrl: './bulk-reverse.component.html',
  styleUrls: ['./bulk-reverse.component.css']
})
export class BulkReverseComponent implements OnInit {
  public searchControl = new FormControl(`{
      "geolocations" : [{
      "longitude":  0.629834723775309,
      "latitude": 51.7923246977375
      }, {
      "longitude": -2.49690382054704,
      "latitude": 53.5351312861402,
      "radius": 1000,
      "limit": 5
      }]
    }`);
  public responseValue = "";
  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.bulkPostcode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err));
  }

  ngOnInit() {
  }

}
