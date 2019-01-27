import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToRgb'
})
export class HexToRgbPipe implements PipeTransform {

  transform(hex: any, args?: any): any {
    return hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
      , (m, r, g, b) => '#' + r + r + g + g + b + b)
      .substring(1).match(/.{2}/g)
      .map(x => parseInt(x, 16));
  }

}
