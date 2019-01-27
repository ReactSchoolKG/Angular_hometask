import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { SquarePipe } from './square.pipe';
import { HexToRgbPipe } from './hex-to-rgb.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SquarePipe,
    HexToRgbPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
