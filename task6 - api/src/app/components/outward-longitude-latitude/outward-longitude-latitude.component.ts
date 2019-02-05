import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-outward-longitude-latitude',
  templateUrl: './outward-longitude-latitude.component.html',
  styleUrls: ['./outward-longitude-latitude.component.css']
})
export class OutwardLongitudeLatitudeComponent implements OnInit {
  public longitude = new FormControl('');
  public latitude = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.nearestOutwardCodeLonLat(this.longitude.value, this.latitude.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }
  
  ngOnInit() {
  }

}
