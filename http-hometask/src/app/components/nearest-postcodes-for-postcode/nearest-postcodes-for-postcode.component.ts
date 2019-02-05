import { Component } from '@angular/core';
import {HttpService} from '../../sevices/httpService/http.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-nearest-postcodes-for-postcode',
  templateUrl: './nearest-postcodes-for-postcode.component.html',
  styleUrls: ['./nearest-postcodes-for-postcode.component.css']
})
export class NearestPostcodesForPostcodeComponent {
  public search = new FormControl('');
  public response = {
    error: false,
    status: false,
    message: '',
    result: Object
  };

  constructor(private http: HttpService) { }

  makeRequest() {
    this.http
      .getNearestPostcodesForPostcode(this.search.value)
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
