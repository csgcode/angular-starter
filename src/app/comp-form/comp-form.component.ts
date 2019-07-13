import { Component, forwardRef } from '@angular/core';
import { ControlContainer, ControlValueAccessor, FormGroup, FormControl, NG_VALUE_ACCESSOR, NgControl, NgForm } from '@angular/forms';

// https://docs.google.com/presentation/d/e/2PACX-1vTS20UdnMGqA3ecrv7ww_7CDKQM8VgdH2tbHl94aXgEsYQ2cyjq62ydU3e3ZF_BaQ64kMyQa0INe2oI/pub?slide=id.g293d7d2b9d_1_1532
@Component({
  selector: 'app-address-form',
  template: `
    <div [formGroup]="form">
      <label>city</label>
      <input formControlName="city" (blur)="onTouched()">
      <label>town</label>
      <input formControlName="town" (blur)="onTouched()">
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CompFormComponent)
    }
  ]
})
export class CompFormComponent implements ControlValueAccessor {
  form: FormGroup = new FormGroup({
    city: new FormControl,
    town: new FormControl
  });

  onTouched: () => void = () => {};

  writeValue(v: any) {
    this.form.setValue(v, { emitEvent: false });
  }

  registerOnChange(fn: (v: any) => void) {
    this.form.valueChanges.subscribe(fn);
  }

  setDisabledState(disabled: boolean) {
    disabled ? this.form.disable() : this.form.enable();
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }
}