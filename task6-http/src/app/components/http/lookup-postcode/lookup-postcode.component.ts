import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-lookup-postcode',
  templateUrl: './lookup-postcode.component.html',
  styleUrls: ['./lookup-postcode.component.css']
})
export class LookupPostcodeComponent implements OnInit {

  public searchControl = new FormControl('');

  responce;

  constructor(private httpService: HttpService) { }

  handleRequest(){
    this.httpService.lookupPostcode(this.searchControl.value)
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
