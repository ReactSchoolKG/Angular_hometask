import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../sevices/httpService/http.service';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged, switchMap} from "rxjs/internal/operators";

@Component({
  selector: 'app-autocomplete-postcode',
  templateUrl: './autocomplete-postcode.component.html',
  styleUrls: ['./autocomplete-postcode.component.css']
})
export class AutocompletePostcodeComponent implements OnInit {
  public search = new FormControl('');
  public response = {
    error: false,
    status: false,
    message: '',
    result: Object
  };

  constructor(private http: HttpService) { }

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(text => this.http.autocompletePostcode(text))
      )
      .subscribe(res => {
          console.log(res);
          this.response.status = true;
          this.response.result = res;
        },
        err => {
          this.response.error = true;
          this.response.message = err;
        });
  }

}
