import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroListItemComponent } from './components/hero-list-item/hero-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
