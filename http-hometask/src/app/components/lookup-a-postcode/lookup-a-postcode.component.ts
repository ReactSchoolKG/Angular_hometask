import { Component } from '@angular/core';
import { HttpService } from '../../sevices/httpService/http.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lookup-a-postcode',
  templateUrl: './lookup-a-postcode.component.html',
  styleUrls: ['./lookup-a-postcode.component.css']
})
export class LookupAPostcodeComponent {
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
      .lookupPostcode(this.search.value)
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
