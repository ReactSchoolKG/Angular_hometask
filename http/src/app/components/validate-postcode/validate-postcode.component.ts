import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-validate-postcode',
  templateUrl: './validate-postcode.component.html',
  styleUrls: ['./validate-postcode.component.css']
})
export class ValidatePostcodeComponent implements OnInit {
  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.validatePostcode(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      )
  }

  ngOnInit() {
  }

}
