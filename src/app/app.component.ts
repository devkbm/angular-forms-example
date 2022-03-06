import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-forms-example';
  fg!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.fg = this.fb.group({
      input1: ['123', [ Validators.required ]]
    });
  }

  ngOnInit(): void {

  }

}
