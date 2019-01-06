import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { fromEvent } from 'rxjs/index';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('search') input: ElementRef;
  private heroes = [
    {name: 'Wolverine', family: 'Marvel', isEvil: false},
    {name: 'Deadpool', family: 'Marvel', isEvil: false},
    {name: 'Magneto', family: 'Marvel', isEvil: true},
    {name: 'Charles Xavier', family: 'Marvel', isEvil: false},
    {name: 'Batman', family: 'DC Comics', isEvil: false},
    {name: 'Harley Quinn', family: 'DC Comics', isEvil: true},
    {name: 'Legolas', family: 'Tolkien', isEvil: false},
    {name: 'Gandalf', family: 'Tolkien', isEvil: false},
    {name: 'Saruman', family: 'Tolkien', isEvil: true},
  ];
  public array = [...this.heroes];
  public time;
  constructor() {
  }
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'input')
      .pipe(
        map((e: KeyboardEvent) => {
          this.array = [];
          return e.target.value;
        }),
        filter( text => {
          if (text.trim().length > 0) {
            return text;
          } else {
            this.array = [...this.heroes];
          }
        }),
        debounceTime(10),
        distinctUntilChanged(),
      )
      .subscribe(data => {
        this.array = [];
        this.heroes.forEach(hero => {
          if (hero.name.includes(data)) {
            this.array = [...this.array, hero];
          }
        });
        this.time = new Date().toLocaleString();
      });
  }
}
