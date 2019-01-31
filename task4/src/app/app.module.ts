import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CircleSquarePipe } from './pipes/circleSquare/circle-square.pipe';
// import { HexToRgbPipe } from './pipes/hexToRgb/hex-to-rgb.pipe';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomeComponent } from './home/home.component';
// import { UserFormComponent } from './form-account/user-form.component';
// import { FormComponent } from './form/form.component';


// add routing module
// declare NotFoundPageComponent and HomeComponent
@NgModule({
  declarations: [
    AppComponent,
    // CircleSquarePipe,
    // HexToRgbPipe,
    NotFoundPageComponent,
    HomeComponent,
    // FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
