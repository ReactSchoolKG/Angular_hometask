import { HomePostItemComponent } from './../../components/home-components/home-post-item/home-post-item.component';
import { HomePostsComponent } from './../../components/home-components/home-posts/home-posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from '../../components/home-components/home-header/home-header.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomePostsComponent,
    HomePostItemComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
