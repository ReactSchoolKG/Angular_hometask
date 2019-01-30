import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'sample-post',
        loadChildren: './sample-post/sample-post.module#SamplePostModule'
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
