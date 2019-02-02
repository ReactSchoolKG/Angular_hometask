import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.css']
})
export class HeaderHomeComponent implements OnInit {
  title:string = 'Clean Blog';
  subTitle:string = 'A Blog Theme by Start Bootstrap';
  
  constructor() { }

  ngOnInit() {
  }

}
