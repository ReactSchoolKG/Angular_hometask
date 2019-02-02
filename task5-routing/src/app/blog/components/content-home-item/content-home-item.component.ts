import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-home-item',
  templateUrl: './content-home-item.component.html',
  styleUrls: ['./content-home-item.component.css']
})
export class ContentHomeItemComponent implements OnInit {

  @Input() post;
  constructor() { }

  ngOnInit() {  
  }
}
