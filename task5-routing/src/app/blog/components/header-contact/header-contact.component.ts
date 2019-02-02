import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-contact',
  templateUrl: './header-contact.component.html',
  styleUrls: ['./header-contact.component.css']
})
export class HeaderContactComponent implements OnInit {
  title:string = 'Contact Me';
  subTitle:string = 'Have questions? I have answers.';
  constructor() { }

  ngOnInit() {
  }

}
