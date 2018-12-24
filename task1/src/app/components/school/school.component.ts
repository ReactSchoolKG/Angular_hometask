import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { School } from '../../models/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  @Input() data:School;
  @Output() schoolAdd = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {
  }
  addSchool(){
    this.schoolAdd.emit(this.data);
  }
}
