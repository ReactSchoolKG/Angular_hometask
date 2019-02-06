import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converter' 
})
export class ConverterPipe implements PipeTransform {

  transform(hex: any, args?: any): any {
    return hex.match(/[A-Za-z0-9]{2}/g).map(v => parseInt(v, 16));
  }

}