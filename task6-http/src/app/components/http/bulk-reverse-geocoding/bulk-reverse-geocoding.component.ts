import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-bulk-reverse-geocoding',
  templateUrl: './bulk-reverse-geocoding.component.html',
  styleUrls: ['./bulk-reverse-geocoding.component.css']
})
export class BulkReverseGeocodingComponent implements OnInit {

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
  responce;

  constructor(private httpService: HttpService) { }

  handleRequest(){
    this.httpService.getBulkReverseGeocoding(this.searchControl.value)
    .subscribe(
      res => {
        console.log('Server responce: ', res);
        this.responce = {status: res.status, result: res.result}
      },
      err => {
        console.log('ERROR!: ', err);
        this.responce = {status: err.status, error: err.message}
      });
  }
  
  ngOnInit() {
  }
}
