import {Component, Input, ViewChild, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomFormComponent),
    multi: true,
  }]
})
export class CustomFormComponent implements ControlValueAccessor {
  
  constructor(
    private _renderer: Renderer2
  ) { }

  value: string = '';
  @Input() type: string = 'text';
  @Input() id: string;
  @Input() placeholder: string = '';

  @ViewChild('inputElement') private _inputElement: ElementRef;
  get inputElement(): ElementRef {
    return this._inputElement;
  }
  private _onChange = (_: any) => {};
  private _onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled);
  }

  onChange(event: any) {
    this._onChange(event.target.value);
  }
  onKeyup(event: any) {
    this._onChange(event.target.value);
  }
  onBlur(event: any) {
    this._onTouched();
  }

  ngOnInit() {
  }

}
