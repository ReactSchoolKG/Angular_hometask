import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SchoolModel } from '../../models/school-model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  @Input() data: SchoolModel;
  @Output() schoolAdded = new EventEmitter<object>();

  constructor() { }

  ngOnInit() {
  }

  addNewSchool() {
    const school: object = {
      name: this.data.name,
      id: this.data.id,
      place: this.data.place
    };
    this.schoolAdded.emit(school);
  }
}
