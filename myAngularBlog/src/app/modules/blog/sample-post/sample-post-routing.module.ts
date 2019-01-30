import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePostComponent } from './sample-post.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePostRoutingModule { }
