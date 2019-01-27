import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserItemComponent } from './components/user-item/user-item.component';
import { ChildItemComponent } from './components/child-item/child-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { CylinderVolumePipe } from './pipes/CylindrVolume/cylinder-volume.pipe';
import { CircleSquarePipe } from './pipes/CircleSquare/circle-square.pipe';
import { HexToRgbPipe } from './pipes/HEXtoRGB/hex-to-rgb.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserItemComponent,
    ChildItemComponent,
    UserFormComponent,
    CylinderVolumePipe,
    CircleSquarePipe,
    HexToRgbPipe,
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
