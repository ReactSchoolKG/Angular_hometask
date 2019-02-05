import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-random-postcodes',
  templateUrl: './random-postcodes.component.html',
  styleUrls: ['./random-postcodes.component.css']
})
export class RandomPostcodesComponent implements OnInit {
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.randomPostcode()
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit() {
  }

}
