import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, Validators,AbstractControl, ValidationErrors, } from '@angular/forms'

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.sass']
})
export class MainFormComponent implements OnInit {
  formValues;

  constructor(private fb: FormBuilder) { }

  // Code
  public nestedForm: FormGroup = new FormGroup({
      fname: new FormControl("", [Validators.required]),
      email: new FormControl("", ),
      addressLine: new FormControl("", ),
      areacode: new FormControl("",),
      address: this.fb.control({
        city: '',
        town: '',
      })
  })

  onSubmit() {
    this.formValues = this.nestedForm.value;
    console.log('nested forms values', this.nestedForm.value);
  }
  testPatch() {
    this.nestedForm.get('email').patchValue('imgokulcs@gmail.com');
    this.nestedForm.get('areacode').patchValue('5');
    this.nestedForm.get('address').patchValue({city: 'kochi', town  : 'west-kochi da'});


    this.formValues = this.nestedForm.value;
    console.log('patched values', this.nestedForm.value);
  }
  
  
  
  
  
  
  
  ngOnInit() {
  }
  
}
