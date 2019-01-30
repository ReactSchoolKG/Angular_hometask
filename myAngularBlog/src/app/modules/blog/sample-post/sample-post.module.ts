import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePostRoutingModule } from './sample-post-routing.module';
import { SamplePostComponent } from './sample-post.component';
import { SamplePostBodyComponent } from '../../../components/SamplePostComponents/sample-post-body/sample-post-body.component';
import { SamplePostHeaderComponent } from '../../../components/SamplePostComponents/sample-post-header/sample-post-header.component';

@NgModule({
  declarations: [
    SamplePostComponent,
    SamplePostBodyComponent,
    SamplePostHeaderComponent
  ],
  imports: [
    CommonModule,
    SamplePostRoutingModule
  ]
})
export class SamplePostModule { }
