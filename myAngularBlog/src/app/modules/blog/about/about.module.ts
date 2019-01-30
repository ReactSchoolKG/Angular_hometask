import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutBodyComponent } from '../../../components/AboutComponents/about-body/about-body.component';
import { AboutHeaderComponent } from '../../../components/AboutComponents/about-header/about-header.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutBodyComponent,
    AboutHeaderComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
