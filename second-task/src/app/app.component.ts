import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from "rxjs";
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('input') input: ElementRef;
  search:Object;

  
ngOnInit() {
  fromEvent(this.input.nativeElement, 'keyup').pipe(
    map((event: any) => event.target.value),
    filter(res => res.length > 2),
    debounceTime(300),        
    distinctUntilChanged())
  .subscribe((inputText: string) => this.Output(inputText))
}

Output(inputText) {
  this.search = {
     text: inputText,
     date: new Date().toLocaleTimeString()
  }
}

}
