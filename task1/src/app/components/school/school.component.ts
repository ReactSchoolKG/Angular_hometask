import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SchoolModel } from '../../models/school-model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {
  @Input() data: SchoolModel;
  @Output() addNewSchool = new EventEmitter<object>();

  constructor() {
  }

  ngOnInit() {
  }

  addSchool() {
    this.addNewSchool.emit(this.data);
  }
}
