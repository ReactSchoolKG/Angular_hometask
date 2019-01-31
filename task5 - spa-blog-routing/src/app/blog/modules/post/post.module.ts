import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { HeaderComponent } from './components/header/header.component';
import { PostInfoComponent } from './components/post-info/post-info.component';

@NgModule({
  declarations: [PostComponent, HeaderComponent, PostInfoComponent],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
