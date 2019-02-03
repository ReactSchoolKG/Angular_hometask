import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-post-item',
  templateUrl: './home-post-item.component.html',
  styleUrls: ['./home-post-item.component.scss']
})
export class HomePostItemComponent implements OnInit {

 @Input() post;
  constructor() { }

  ngOnInit() {
  }
}
