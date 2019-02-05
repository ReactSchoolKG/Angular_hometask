import { Component } from '@angular/core';
import { HttpService } from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-bulk-lookup-postcodes',
  templateUrl: './bulk-lookup-postcodes.component.html',
  styleUrls: ['./bulk-lookup-postcodes.component.css']
})
export class BulkLookupPostcodesComponent {

  private postcodes = {
    'postcodes' : ['OX49 5NU', 'M32 0JG', 'NE30 1DP']
  };

  public response = {
    error: false,
    status: false,
    message: '',
    result: Object
  };

  constructor(private http: HttpService) { }

  makeRequest() {
    this.http
      .bulkLookupPostcodes(this.postcodes)
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
