import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-autocomplete-postcode',
  templateUrl: './autocomplete-postcode.component.html',
  styleUrls: ['./autocomplete-postcode.component.css']
})
export class AutocompletePostcodeComponent implements OnInit {
  public searchControl = new FormControl('');
  public responseValue = "";

  constructor(private httpService: HttpService) { }

  getRequest(){
    this.httpService.autocompletePostcode(this.searchControl.value)
    .subscribe(
      res => this.responseValue = JSON.stringify(res),
      err => this.responseValue = JSON.stringify(err)
    )
  }

  ngOnInit() {
  }

}
