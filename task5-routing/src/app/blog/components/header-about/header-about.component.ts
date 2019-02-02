import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-about',
  templateUrl: './header-about.component.html',
  styleUrls: ['./header-about.component.css']
})
export class HeaderAboutComponent implements OnInit {
  title:string = 'About Me';
  subTitle:string = 'This is what I do.';
  constructor() { }

  ngOnInit() {
  }

}
