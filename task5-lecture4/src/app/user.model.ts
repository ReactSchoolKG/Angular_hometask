import { Child } from './child.model';

export interface User {
  firstName: string;
  lastName: string;
  age: number;
  children: Child[];
}
