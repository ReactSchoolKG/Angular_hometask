import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-nearest-postcodes',
  templateUrl: './nearest-postcodes.component.html',
  styleUrls: ['./nearest-postcodes.component.css']
})
export class NearestPostcodesComponent implements OnInit {
  public searchControl = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.nearestPostcodes(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit() {
  }

}
