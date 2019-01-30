import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
  declarations: [
    BlogComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
