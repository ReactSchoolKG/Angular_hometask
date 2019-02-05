import { Component } from '@angular/core';
import {HttpService} from '../../sevices/httpService/http.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-nearest-postcodes-longitude-latitude-get',
  templateUrl: './nearest-postcodes-longitude-latitude-get.component.html',
  styleUrls: ['./nearest-postcodes-longitude-latitude-get.component.css']
})
export class NearestPostcodesLongitudeLatitudeGetComponent {
  public longitude = new FormControl('');
  public latitude = new FormControl('');
  public response = {
    error: false,
    status: false,
    message: '',
    result: Object
  };

  constructor(private http: HttpService) { }

  makeRequest() {
    this.http
      .nearestPostcodesByLongitudeAndLatitude(this.longitude.value, this.latitude.value)
      .subscribe(res => {
          console.log(res);
          this.response.status = true;
          this.response.result = res;
        },
        err => {
          this.response.error = true;
          this.response.message = err;
        });
  }
}
