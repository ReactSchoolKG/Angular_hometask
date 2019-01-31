import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesExampleRoutingModule } from './pipes-example-routing.module';
import { PipesExampleComponent } from './pipes-example.component';
import { CircleSquarePipe } from '../pipes/circleSquare/circle-square.pipe';
import { HexToRgbPipe } from '../pipes/hexToRgb/hex-to-rgb.pipe';


@NgModule({
  declarations: [
    PipesExampleComponent,
    CircleSquarePipe,
    HexToRgbPipe,
  ],
  imports: [
    CommonModule,
    PipesExampleRoutingModule
  ]
})
export class PipesExampleModule { }
