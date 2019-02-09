import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SquarePipe } from './pipes/square.pipe';
import { PersonFormComponent } from './person-form/person-form.component';
import { ConverterPipe } from './pipes/converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SquarePipe,
    PersonFormComponent,
    ConverterPipe
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
