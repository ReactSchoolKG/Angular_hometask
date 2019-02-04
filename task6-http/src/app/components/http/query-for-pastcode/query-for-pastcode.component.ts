import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-query-for-pastcode',
  templateUrl: './query-for-pastcode.component.html',
  styleUrls: ['./query-for-pastcode.component.css']
})
export class QueryForPastcodeComponent implements OnInit {

  public searchControl = new FormControl('');
  responce;
  
  constructor(private httpService: HttpService) { }
  
  handleRequest(){
    this.httpService.queryForPastcode(this.searchControl.value)
    .subscribe(
      res => {
        console.log('Server responce: ', res);
        this.responce = {status: res.status, result: res.body.result}
      },
      err => {
        console.log('ERROR!: ', err);
        this.responce = {status: err.status, result: null}
      });
  }
  ngOnInit() {
  }

}
