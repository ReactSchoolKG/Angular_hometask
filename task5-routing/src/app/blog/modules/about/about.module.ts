import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HeaderAboutComponent } from '../../components/header-about/header-about.component';
import { ContentAboutComponent } from '../../components/content-about/content-about.component';

@NgModule({
  declarations: [AboutComponent,
    HeaderAboutComponent,
    ContentAboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    
  ]
})
export class AboutModule { }
