import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-nearest-postcodes',
  templateUrl: './nearest-postcodes.component.html',
  styleUrls: ['./nearest-postcodes.component.css']
})
export class NearestPostcodesComponent implements OnInit {
  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.nearestPostcodes(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }

}
