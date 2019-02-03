import { SamplePostHeaderComponent } from './../../components/sample-post-components/sample-post-header/sample-post-header.component';
import { SamplePostBodyComponent } from './../../components/sample-post-components/sample-post-body/sample-post-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [
    PostComponent,
    SamplePostBodyComponent,
    SamplePostHeaderComponent
  
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
