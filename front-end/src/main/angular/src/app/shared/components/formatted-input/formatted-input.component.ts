import {Component, ElementRef, forwardRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FormattedInputComponent), multi: true}],
  selector: 'app-formatted-input',
  templateUrl: './formatted-input.component.html',
  styleUrls: ['./formatted-input.component.scss']
})
export class FormattedInputComponent implements OnInit, ControlValueAccessor  {
  value: number = 0;
  focused: boolean = false;
  onChange: (_: any) => void;
  onTouched: () => void;
  isDisabled: boolean;
  @Input() symbol: string = '$';
  @ViewChild('input') input: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  writeValue(value: any): void {
    if (value !== this.value && Number.parseFloat(value) === +value) {
      this.value = value;
    }
  }

  @HostListener('window:keydown', ['$event']) onKeydown($event: KeyboardEvent) {
    if ($event.key === '-') {
      this.value = -this.value;
    }
    if ('e-+Shift'.includes($event.key)) {
      $event.preventDefault();
    }
  }

  absoluteValue(): string {
    return Math.abs(this.value).toLocaleString();
  }

  updateFocus(focused: boolean) {
    this.focused = focused;
    this.onTouched();
    this.input.nativeElement.value = this.value;
  }
}
