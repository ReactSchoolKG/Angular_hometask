import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circleSquare'
})
export class CircleSquarePipe implements PipeTransform {

  transform(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
  }

}
