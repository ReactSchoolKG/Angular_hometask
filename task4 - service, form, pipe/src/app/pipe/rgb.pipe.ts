import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rgb'
})
export class RgbPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
    return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
  }

}
