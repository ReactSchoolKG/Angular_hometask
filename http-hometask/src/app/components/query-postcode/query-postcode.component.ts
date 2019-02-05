import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpService} from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-query-postcode',
  templateUrl: './query-postcode.component.html',
  styleUrls: ['./query-postcode.component.css']
})
export class QueryPostcodeComponent {
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
      .queryPostcode(this.search.value)
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
