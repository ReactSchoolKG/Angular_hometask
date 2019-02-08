import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-postcodes-longitude-latitude',
  templateUrl: './postcodes-longitude-latitude.component.html',
  styleUrls: ['./postcodes-longitude-latitude.component.css']
})
export class PostcodesLongitudeLatitudeComponent implements OnInit {
  public longitude = new FormControl('');
  public latitude = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.nearestPostcodesForLonLat(this.longitude.value, this.latitude.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }

}
