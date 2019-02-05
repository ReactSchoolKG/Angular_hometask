import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-lookup-terminated-postcode',
  templateUrl: './lookup-terminated-postcode.component.html',
  styleUrls: ['./lookup-terminated-postcode.component.css']
})
export class LookupTerminatedPostcodeComponent {
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
      .lookupTerminatedPostcode(this.search.value)
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
