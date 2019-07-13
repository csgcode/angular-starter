import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { MainFormComponent } from './main-form/main-form.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { CompFormComponent } from './comp-form/comp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent,
    MainFormComponent,
    ExampleTwoComponent,
    CompFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
