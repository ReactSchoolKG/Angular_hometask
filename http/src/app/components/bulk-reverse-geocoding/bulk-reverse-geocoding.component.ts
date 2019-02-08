import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulk-reverse-geocoding',
  templateUrl: './bulk-reverse-geocoding.component.html',
  styleUrls: ['./bulk-reverse-geocoding.component.css']
})
export class BulkReverseGeocodingComponent implements OnInit {

  public search = new FormControl(`{
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
  public response: string;

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
