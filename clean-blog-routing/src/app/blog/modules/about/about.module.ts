import { AboutBodyComponent } from './../../components/about-components/about-body/about-body.component';
import { AboutHeaderComponent } from './../../components/about-components/about-header/about-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
    AboutHeaderComponent,
    AboutBodyComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
