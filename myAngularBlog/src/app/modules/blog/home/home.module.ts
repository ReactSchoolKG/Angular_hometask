import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeHeaderComponent } from '../../../components/HomeComponents/home-header/home-header.component';
import { HomePostsComponent } from '../../../components/HomeComponents/home-posts/home-posts.component';
import { BlogListItemComponent } from '../../../components/blog-list-item/blog-list-item.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomePostsComponent,
    BlogListItemComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
