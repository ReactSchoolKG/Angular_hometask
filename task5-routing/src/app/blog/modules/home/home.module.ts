import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderHomeComponent } from '../../components/header-home/header-home.component';
import { ContentHomeWrapperComponent } from '../../components/content-home-wrapper/content-home-wrapper.component';
import { ContentHomeItemComponent } from '../../components/content-home-item/content-home-item.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderHomeComponent,
    ContentHomeWrapperComponent,
    ContentHomeItemComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
