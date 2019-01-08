import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task3';



  searchBox = document.getElementById('search-box');

  const typeahead = fromEvent(this.searchBox, 'input').pipe(
    map((e: KeyboardEvent) => e.target.value),
    filter(text => text.length > 2),
    debounceTime(10),
    distinctUntilChanged(),
    switchMap(() => ajax('/api/endpoint'))
  );

  typeahead.subscribe(data => {
    // Handle the data from the API
  });





}
