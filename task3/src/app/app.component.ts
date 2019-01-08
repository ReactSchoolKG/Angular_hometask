import { Component, AfterViewInit, ViewChild, Input, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { of } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('input') inputField: ElementRef;

  title = 'task3';


  constructor() { }

  ngAfterViewInit() {
    const input = document.getElementById('input');
    console.log(input);
    const typeahead = fromEvent(input as HTMLInputElement, 'input').pipe(
      map((e: KeyboardEvent) => e.target['value']),
      filter(text => text.length > 1),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap(() => of(1, 11, 111, 2, 22, 222, 3, 33, 333))
    );

    typeahead.subscribe(data => {
      console.log(data);
    });




  }


  // searchBox = document.getElementById('search-box');

  // const typeahead = fromEvent(this.searchBox, 'input').pipe(
  //   map((e: KeyboardEvent) => e.target.value),
  //   filter(text => text.length > 2),
  //   debounceTime(10),
  //   distinctUntilChanged(),
  //   switchMap(() => ajax('/api/endpoint'))
  // );

  // typeahead.subscribe(data => {
  //   // Handle the data from the API
  // });





}
