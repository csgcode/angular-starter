// 
import {Component, Input, ViewChild, ElementRef, Renderer2, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {FormGroup,FormControl, Validators,AbstractControl, ValidationErrors, } from '@angular/forms'


@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.sass'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ExampleTwoComponent),
    multi: true,
  }]
})
export class ExampleTwoComponent implements ControlValueAccessor {
  formattedValue: string;
  
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
    console.log('writevalue', obj);
    this.value = this.customForm.value;
    this.customForm.patchValue({
      field1: obj,
      field2: obj,
    });
  }
  registerOnChange(fn: any): void {
    console.log('registerOnChange', fn);
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    console.log('registerOnTouched', fn);
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
    this._renderer.setProperty(this._inputElement.nativeElement, 'disabled', isDisabled);
  }

  onChange(event: any) {
    console.log('onChange', event);
    this._onChange(event.target.value);
  }
  onKeyup(event: any) {
    console.log('onKeyup', event);
    this._onChange(event.target.value);
  }
  onBlur(event: any) {
    console.log('onBlur', event);
    this._onTouched();
  }
  
  public customForm: FormGroup = new FormGroup({
    field1: new FormControl("", ),
    field2: new FormControl("", ),
  })
  

  onChanges(): void {
    this.customForm.valueChanges.subscribe(val => {
      this.formattedValue =
      `Hello,
  
      My name is ${val.name} and my email is ${val.email}.
  
      I would like to tell you that ${val.message}.`;
    });
  }


  ngOnInit() {
  }

}


