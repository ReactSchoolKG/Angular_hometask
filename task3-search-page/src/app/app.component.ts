import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { fromEvent } from "rxjs"
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('inputRef') inputRef: ElementRef;
    search:Object;

  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'keyup').pipe(
      // get value
      map((evt: any) => evt.target.value),
      // text length must be > 2 chars
      filter(res => res.length > 2),
      // emit after 0.5s of silence
      debounceTime(500),    
      // emit only if data changes since the last emit       
      distinctUntilChanged()
     
    // subscription
    ).subscribe((inputText: string) => this.formatOutput(inputText))
  }

  formatOutput(inputText) {
    this.search = {text: inputText, date: new Date().toLocaleTimeString()}
  }

  // create style objects
  outputStyle = {
  'color':'blue',
  'font-size':'smaller'
  };

  mainStyle = {
  'text-align' : 'center',
  'height' : '200px',
  'margin' : '0 auto',
  'color' : '#fff',
  'background-color' : 'rgb(30, 30, 30)',
  };
}
