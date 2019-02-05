import { Component } from '@angular/core';
import {HttpService} from '../../sevices/httpService/http.service';

@Component({
  selector: 'app-bulk-reverse-geocoding',
  templateUrl: './bulk-reverse-geocoding.component.html',
  styleUrls: ['./bulk-reverse-geocoding.component.css']
})
export class BulkReverseGeocodingComponent {
  private geolocation = {
    'geolocations' : [{
      'longitude':  0.629834723775309,
      'latitude': 51.7923246977375
    }, {
      'longitude': -2.49690382054704,
      'latitude': 53.5351312861402,
      'radius': 1000,
      'limit': 5
    }]
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
      .bulkReverseGeocoding(this.geolocation)
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
