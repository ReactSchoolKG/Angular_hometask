import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-post',
  templateUrl: './header-post.component.html',
  styleUrls: ['./header-post.component.css']
})
export class HeaderPostComponent implements OnInit {
  title:string = 'Man must explore, and this is exploration at its greatest';
  subTitle:string = 'Posted by';
  constructor() { }

  ngOnInit() {
  }

}
