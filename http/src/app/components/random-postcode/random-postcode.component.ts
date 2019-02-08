import { HttpService } from '../../services/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-postcode',
  templateUrl: './random-postcode.component.html',
  styleUrls: ['./random-postcode.component.css']
})
export class RandomPostcodeComponent implements OnInit {

  public responseValue: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.randomPostcode()
      .subscribe(
        res => this.responseValue = res,
        err => this.responseValue = err
      )
  }

  ngOnInit() {
  }

}
