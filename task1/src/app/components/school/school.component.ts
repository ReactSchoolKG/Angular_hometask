import { Component, OnInit, Output, Input, EventEmitter    } from '@angular/core';
import { School } from '../models/school/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  @Input() data:School;
  @Output() schoolAdded = new EventEmitter<object>();
  constructor() { }

  ngOnInit() {}

  addNewSchool(){
    const school: School = {
      name: this.data.name,
      id: this.data.id,
      place:this.data.place,
    };
    this.schoolAdded.emit(school);
  }
}
