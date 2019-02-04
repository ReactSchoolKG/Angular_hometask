import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-look-terminated',
  templateUrl: './look-terminated.component.html',
  styleUrls: ['./look-terminated.component.css']
})
export class LookTerminatedComponent implements OnInit {

  public searchControl = new FormControl('');
  responce;

  constructor(private httpService: HttpService) { }

  handleRequest(){
    this.httpService.lookTerminated(this.searchControl.value)
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
