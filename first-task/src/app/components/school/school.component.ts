
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { School } from '../../models/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  @Input() data:School;
  @Output() addSchool = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }
  addedSchool(){
    this.addSchool.emit(this.data);
  }
}