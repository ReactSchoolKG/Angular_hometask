import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(radius: number, args?: any): any {
    return Math.PI * Math.pow(radius,2);
  }

}
