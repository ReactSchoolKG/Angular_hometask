import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit{
  public searchValue$;
  @ViewChild ('inputValue') inputValue:ElementRef;
  ngAfterViewInit(){
    this.searchValue$ = fromEvent(this.inputValue.nativeElement, 'keydown')
      .pipe(map(res=>{
        return JSON.stringify({ searchText:this.inputValue.nativeElement.value,
          timestamp:new Date().toLocaleTimeString()}) 
      }))
  }
}