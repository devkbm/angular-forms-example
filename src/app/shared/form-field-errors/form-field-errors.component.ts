import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.css']
})
export class FormFieldErrorsComponent {

  @Input() formField?: FormControl;

  constructor() { }


}
