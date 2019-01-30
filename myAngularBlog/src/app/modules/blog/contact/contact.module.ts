import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactBodyComponent } from '../../../components/ContactComponents/contact-body/contact-body.component';
import { ContactHeaderComponent } from '../../../components/ContactComponents/contact-header/contact-header.component';

@NgModule({
  declarations: [
    ContactComponent,
    ContactBodyComponent,
    ContactHeaderComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
