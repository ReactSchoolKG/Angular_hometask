import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  @Input() post;
  constructor() { }

  ngOnInit() {  
    console.log('onInit');
    // console.log(this.post);
  }

}
