import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-lookup-nearest-outward',
  templateUrl: './lookup-nearest-outward.component.html',
  styleUrls: ['./lookup-nearest-outward.component.css']
})
export class LookupNearestOutwardComponent implements OnInit {

  public searchControl = new FormControl('');
  responce;

  constructor(private httpService: HttpService) { }

  handleRequest(){
    this.httpService.lookupNearestOutwardCode(this.searchControl.value)
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
