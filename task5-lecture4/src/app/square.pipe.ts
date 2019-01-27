import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return Math.pow(value, 2) * Math.PI;
  }

}
