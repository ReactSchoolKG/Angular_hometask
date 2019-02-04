import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { HttpService } from '../../.././services/http.service';

@Component({
  selector: 'app-postcode-autocomplete',
  templateUrl: './postcode-autocomplete.component.html',
  styleUrls: ['./postcode-autocomplete.component.css']
})
export class PostcodeAutocompleteComponent implements OnInit {

  public searchControl = new FormControl('');
  responce:any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.searchControl
    .valueChanges
    .pipe(
      debounceTime(50),
      distinctUntilChanged(),
      switchMap(search => this.httpService.postcodeAutocomplete(search)))
    .subscribe(
      res => {
        console.log('Server responce: ', res);
        this.responce = {status: 200, result:res}
       },
      err => {
        console.log('ERROR!: ', err);
        this.responce = {status: err.status, result:null} 
      });
  }

}
