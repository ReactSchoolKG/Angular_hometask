import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { CircleSquarePipe } from './pipe/circle-square.pipe';
import { HexToRgbPipe } from './pipe/hex-to-rgb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    CircleSquarePipe,
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
