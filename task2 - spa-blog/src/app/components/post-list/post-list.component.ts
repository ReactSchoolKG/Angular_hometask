import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  public posts: Post[]=[
    { title: 'Man must explore, and this is exploration at its greatest', 
      subtitle: 'Problems look mighty small from 150 miles up', 
      date: 'Posted by Start Bootstrap on September 24, 2018' },
    { title: 'I believe every human has a finite number of heartbeats. I don`t intend to waste any of mine.', 
      subtitle: '',
      date: 'Posted by Start Bootstrap on September 18, 2018' },
    { title: 'Science has not yet mastered prophecy', 
      subtitle: 'We predict too much for the next year and yet far too little for the next ten.', 
      date: 'Posted by Start Bootstrap on August 24, 2018' },
    { title: 'Failure is not an option', 
      subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.', 
      date: 'Posted by Start Bootstrap on July 8, 2018' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
