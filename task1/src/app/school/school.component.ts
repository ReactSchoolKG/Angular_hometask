import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { School } from '../models/school';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  @Input() data: School;
  @Output() addSchool = new EventEmitter<string>();

  constructor() { }

  addSchoolToList() {
    this.addSchool.emit(`${this.data.name} is added to list!`);

  }

  ngOnInit() {
  }

}
