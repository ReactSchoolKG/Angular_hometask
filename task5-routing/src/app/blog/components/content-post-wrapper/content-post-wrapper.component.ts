import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-post-wrapper',
  templateUrl: './content-post-wrapper.component.html',
  styleUrls: ['./content-post-wrapper.component.css']
})
export class ContentPostWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      // console.log("after view init", this.postList)
  }

}

