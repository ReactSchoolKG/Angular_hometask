import {ChildrenModel} from './children-model';

export interface UserModel {
  firstName: string;
  lastName: string;
  age: number;
  children: ChildrenModel;
}
