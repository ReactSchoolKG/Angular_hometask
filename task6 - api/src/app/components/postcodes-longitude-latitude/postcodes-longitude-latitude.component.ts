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
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.lonLatPostcode(this.longitude.value, this.latitude.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit() {
  }

}
