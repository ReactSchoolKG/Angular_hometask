import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cylinderVolume'
})
export class CylinderVolumePipe implements PipeTransform {

  transform(value: number, height: number): number {
    return value * height;
  }

}
