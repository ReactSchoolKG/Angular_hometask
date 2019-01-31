import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circleSquare'
})
export class CircleSquarePipe implements PipeTransform {

  transform(value: any): any {
    return Math.PI * value**2;
  }
}
