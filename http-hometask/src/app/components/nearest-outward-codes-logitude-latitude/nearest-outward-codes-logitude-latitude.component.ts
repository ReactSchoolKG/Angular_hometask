import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-nearest-outward-codes-logitude-latitude',
  templateUrl: './nearest-outward-codes-logitude-latitude.component.html',
  styleUrls: ['./nearest-outward-codes-logitude-latitude.component.css']
})
export class NearestOutwardCodesLogitudeLatitudeComponent {
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
      .nearestOutcodesByLongitudeAndLatitude(this.longitude.value, this.latitude.value)
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
