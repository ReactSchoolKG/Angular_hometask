import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-validate-postcode',
  templateUrl: './validate-postcode.component.html',
  styleUrls: ['./validate-postcode.component.css']
})
export class ValidatePostcodeComponent implements OnInit {
  public searchControl = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.validatePostcode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit() {
  }

}
