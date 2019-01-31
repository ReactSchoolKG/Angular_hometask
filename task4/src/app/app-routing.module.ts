import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from "./home/home.component";

// dafine app routes
// use lazy loading
// implement Home and NotFound pages
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'films',
    loadChildren: './films/films.module#FilmsModule'
  },
  {
    path: 'pipes-example',
    loadChildren: './pipes-example/pipes-example.module#PipesExampleModule'
  },
  {
    path: 'form',
    loadChildren: './form/form.module#FormModule'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
