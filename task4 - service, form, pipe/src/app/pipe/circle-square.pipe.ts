import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'circleSquare'
})
export class CircleSquarePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value**2*Math.PI).toFixed(4);
  }

}
