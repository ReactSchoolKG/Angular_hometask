import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() data;
  constructor() { }

  ngOnInit() {
    console.log('onInit', this.data)
  }

}
