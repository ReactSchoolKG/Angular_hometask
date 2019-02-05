import { Component } from '@angular/core';
import { HttpService } from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-get-random-postcode',
  templateUrl: './get-random-postcode.component.html',
  styleUrls: ['./get-random-postcode.component.css']
})
export class GetRandomPostcodeComponent {

  public response = {
    error: false,
    status: false,
    message: '',
    result: Object
  };

  constructor(private http: HttpService) { }

  makeRequest() {
    this.http
      .getRandomPostcode()
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
