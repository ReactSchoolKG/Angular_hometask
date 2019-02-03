import { BlogComponent } from './blog.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'home',
                loadChildren: './modules/home/home.module#HomeModule'
            },
            {
                path: 'about',
                loadChildren: './modules/about/about.module#AboutModule'

            },
            {
                path: 'post',
                loadChildren: './modules/post/post.module#PostModule'
            },
            {
                path: 'contact',
                loadChildren: './modules/contact/contact.module#ContactModule'

            }     
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class BlogRoutingModule { }