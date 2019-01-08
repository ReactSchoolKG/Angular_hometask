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
      switchMap(() => of('Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'))
    );

    typeahead.subscribe(data => {
      console.log(data);
    });




  }



}
