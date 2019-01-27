import {Component, Input } from '@angular/core';
import {ChildrenModel} from '../../models/children-model';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent {
  @Input() child: ChildrenModel;
  constructor() { }
}
