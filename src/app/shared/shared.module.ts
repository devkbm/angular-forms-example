import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomInputTextComponent } from './custom-input-text/custom-input-text.component';
import { FormFieldErrorsComponent } from './form-field-errors/form-field-errors.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CustomInputTextComponent,
    FormFieldErrorsComponent
  ],
  exports: [
    CustomInputTextComponent
  ]
})
export class SharedModule { }
