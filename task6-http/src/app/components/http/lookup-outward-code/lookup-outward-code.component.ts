import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-lookup-outward-code',
  templateUrl: './lookup-outward-code.component.html',
  styleUrls: ['./lookup-outward-code.component.css']
})
export class LookupOutwardCodeComponent implements OnInit {

  public searchControl = new FormControl('');
  responce;

  constructor(private httpService: HttpService) { }

  handleRequest(){
    this.httpService.lookupOutwardCode(this.searchControl.value)
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
