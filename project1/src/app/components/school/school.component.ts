import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SchoolModel  } from '../../model/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  @Input() data: SchoolModel;
  @Output() onAdd = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }
  
  addSchool() {
    this.onAdd.emit(this.data);
  }
}