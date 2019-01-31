import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutInfoComponent } from './components/about-info/about-info.component';

@NgModule({
  declarations: [AboutComponent, HeaderComponent, AboutInfoComponent],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
