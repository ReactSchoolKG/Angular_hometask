import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-autocomplete-postcode',
  templateUrl: './autocomplete-postcode.component.html',
  styleUrls: ['./autocomplete-postcode.component.css']
})
export class AutocompletePostcodeComponent implements OnInit {
  public search = new FormControl('');
  public response: string;

  constructor(private httpService: HttpService) { }

  getRequest() {
    this.httpService.autocompletePostcode(this.search.value)
      .subscribe(
        res => this.response = res,
        err => this.response = err
      );
  }

  ngOnInit() {
  }

}
