import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexToRgb'
})
export class HexToRgbPipe implements PipeTransform {
  rgb;

  convertToInt(number){
    return parseInt(number, 16);
  }

  // split users input hex color
  splitByLength(input){
    switch(input.length){
      case 7:
      case 9:
        this.rgb = input.match(/[a-f0-9]{2}/g);
        return this.rgb
      
      case 4:
      case 5:
        this.rgb = input.match(/[a-f0-9]{1}/g);
        return this.rgb

      default:
      throw new Error("Not appropriate hex")
    }
  }

  transform(value: any): any {
    return this.splitByLength(value).map(this.convertToInt)
  }

}
