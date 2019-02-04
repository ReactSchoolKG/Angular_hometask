import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-nearest-outward-code-coord',
  templateUrl: './nearest-outward-code-coord.component.html',
  styleUrls: ['./nearest-outward-code-coord.component.css']
})
export class NearestOutwardCodeCoordComponent implements OnInit {

  public searchControlLong = new FormControl('');
  public searchControlLatt = new FormControl('');
  responce;

  constructor(private httpService: HttpService) { }
  
  handleRequest(){
    this.httpService.getNearestOutwardCodeCoord({long: this.searchControlLong.value, latt:this.searchControlLatt.value})
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
