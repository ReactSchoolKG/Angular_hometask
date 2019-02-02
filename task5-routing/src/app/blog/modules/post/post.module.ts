import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { HeaderPostComponent } from '../../components/header-post/header-post.component';
import { ContentPostWrapperComponent } from '../../components/content-post-wrapper/content-post-wrapper.component';

@NgModule({
  declarations: [
    PostComponent,
    HeaderPostComponent,
    ContentPostWrapperComponent,
    
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
