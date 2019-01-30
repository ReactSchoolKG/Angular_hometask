import { Component, Input, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';

@Component({
  selector: 'app-blog-list-item-home',
  templateUrl: './blog-list-item.component.html',
  styleUrls: ['./blog-list-item.component.css']
})
export class BlogListItemComponent implements OnInit {
  @Input() post: PostModel;
  constructor() { }

  ngOnInit() {
  }

}
