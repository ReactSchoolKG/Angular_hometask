import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

// add routing to component
// declare ReactiveFormsModule and FormsModule
@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
