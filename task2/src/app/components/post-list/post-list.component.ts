import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public postList: Post[] = [
    {title: "Man must explore, and this is exploration at its greatest", subtitle: 'Problems look mighty small from 150 miles up',author: 'Start Bootstrap', date: 'September 24, 2018'},
    {title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.", author: 'Start Bootstrap', date: 'September 18, 2018'},
    {title: "Science has not yet mastered prophecy", subtitle: 'We predict too much for the next year and yet far too little for the next ten.', author: ' Start Bootstrap', date: 'August 24, 2018'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
