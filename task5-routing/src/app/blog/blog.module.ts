import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import Routing modules
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

// import Common for all mudules components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    BlogComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
