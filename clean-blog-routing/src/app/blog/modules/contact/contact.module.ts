import { ContactBodyComponent } from './../../components/contact-components/contact-body/contact-body.component';
import { ContactHeaderComponent } from './../../components/contact-components/contact-header/contact-header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactHeaderComponent,
    ContactBodyComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
