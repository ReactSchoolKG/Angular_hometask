import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';

// add routing to component
@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { 
}
