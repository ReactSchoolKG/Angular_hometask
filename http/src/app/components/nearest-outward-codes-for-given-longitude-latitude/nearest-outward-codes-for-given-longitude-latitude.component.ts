import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-nearest-outward-codes-for-given-longitude-latitude',
  templateUrl: './nearest-outward-codes-for-given-longitude-latitude.component.html',
  styleUrls: ['./nearest-outward-codes-for-given-longitude-latitude.component.css']
})
export class NearestOutwardCodesForGivenLongitudeLatitudeComponent implements OnInit {

  public longitude = new FormControl('');
  public latitude = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.nearestOutwardCodeForLonLat(this.longitude.value, this.latitude.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }
  ngOnInit() {
  }

}
