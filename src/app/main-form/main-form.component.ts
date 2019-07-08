import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators,AbstractControl, ValidationErrors, } from '@angular/forms'

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.sass']
})
export class MainFormComponent implements OnInit {
  formValues;

  constructor() { }

  // Code
  public nestedForm: FormGroup = new FormGroup({
      fname: new FormControl("", [Validators.required]),
      email: new FormControl("", ),
      addressLine: new FormControl("", ),
      areacode: new FormControl("",)
  })

  onSubmit() {
    this.formValues = this.nestedForm.value;
    console.log('nested forms values', this.nestedForm.value);
  }
  testPatch() {
    this.nestedForm.get('email').patchValue('imgokulcs@gmail.com');
    this.nestedForm.get('areacode').patchValue('5');

    this.formValues = this.nestedForm.value;
    console.log('patched values', this.nestedForm.value);
  }
  
  
  
  
  
  
  
  ngOnInit() {
  }
  
}
