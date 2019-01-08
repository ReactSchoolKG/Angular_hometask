import {Component, OnInit, ViewChildren} from '@angular/core';
import { BlogListItemComponent } from '../blog-list-item/blog-list-item.component';

@Component({
  selector: 'app-posts-body',
  templateUrl: './posts-body.component.html',
  styleUrls: ['./posts-body.component.css']
})
export class PostsBodyComponent implements OnInit {
  @ViewChildren(BlogListItemComponent) postList;
  posts = [
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      author: 'Start Bootstrap',
      data: 'September 18, 2018',
      id: 0
    },
    {
      title: 'Science has not yet mastered prophecy',
      subtitle: 'We predict too much for the next year and yet far too little for the next ten.',
      author: 'Start Bootstrap',
      data: 'August 24, 2018',
      id: 1
    },
    {
      title: 'Failure is not an option',
      subtitle: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      author: 'Start Bootstrap',
      data: 'July 8, 2018',
      id: 2
    },
    {
      title: 'Angular homework',
      subtitle: 'Create clean blog on Angular',
      author: 'Litvinchuk Dmytro',
      data: 'January 4, 2019',
      id: 3
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  trackById(i: number, post: any) {
    return post.id;
  }

}
