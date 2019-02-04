import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-random-postcode',
  templateUrl: './random-postcode.component.html',
  styleUrls: ['./random-postcode.component.css']
})
export class RandomPostcodeComponent implements OnInit {

  responce;

  constructor(private httpService: HttpService) { }
  
  handleRequest(){
    this.httpService.getRandomPostcode()
    .subscribe(
      res => {
        console.log('Server responce: ', res);
        this.responce = {status: res.status, result: res.body.result}
      },
      err => {
        console.log('ERROR!: ', err);
        this.responce = {status: err.status, error:err.message}
      });
  }
  ngOnInit() {
  }

}
