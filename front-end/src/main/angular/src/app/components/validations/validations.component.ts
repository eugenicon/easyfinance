import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  @Input() field: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit() {
  }

  hasError(errorType: string): boolean {
    return this.control.touched && this.control.errors && this.control.hasError(errorType);
  }
}
