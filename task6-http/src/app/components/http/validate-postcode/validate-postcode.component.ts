import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-validate-postcode',
  templateUrl: './validate-postcode.component.html',
  styleUrls: ['./validate-postcode.component.css']
})
export class ValidatePostcodeComponent implements OnInit {

  public searchControl = new FormControl('');
  responce;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.searchControl
    .valueChanges
    .pipe(
      debounceTime(50),
      distinctUntilChanged(),
      switchMap(search => this.httpService.validatePostcode(search)))
    .subscribe(
      res => {
        console.log('Server responce: ', res);
        this.responce = {status: 200, result: res}
      },
      err => {
        console.log('ERROR!: ', err);
        this.responce = {status: err.status, result: null}
      });
  }

}
