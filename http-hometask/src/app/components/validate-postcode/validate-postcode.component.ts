import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-validate-postcode',
  templateUrl: './validate-postcode.component.html',
  styleUrls: ['./validate-postcode.component.css']
})
export class ValidatePostcodeComponent {
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
      .validatePostcode(this.search.value)
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
