import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-lookup-postcode',
  templateUrl: './lookup-postcode.component.html',
  styleUrls: ['./lookup-postcode.component.css']
})
export class LookupPostcodeComponent implements OnInit {
  public searchControl = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.postcode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit(){
  }
}