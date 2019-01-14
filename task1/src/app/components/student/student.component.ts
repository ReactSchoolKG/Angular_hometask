import { Component, OnInit, Output, Input, EventEmitter   } from '@angular/core';
import { Student } from '../models/student/student';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
@Input() data:Student;
@Output() studentAdded = new EventEmitter<object>();
  constructor() {}

  ngOnInit() {}

  addNewStudent(){
    const student: Student = {
      firstName: this.data.firstName,
      lastName: this.data.lastName,
    };
    this.studentAdded.emit(student);
  }
}

