import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { HeaderContactComponent } from '../../components/header-contact/header-contact.component';
import { ContentContactComponent } from '../../components/content-contact/content-contact.component';

@NgModule({
  declarations: [
    ContactComponent,
    HeaderContactComponent,
    ContentContactComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
