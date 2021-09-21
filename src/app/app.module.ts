import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormControl, ReactiveFormsModule, ValidationErrors} from '@angular/forms';
import {FormlyFieldConfig, FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

export function IpValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field?.formControl?.value}" is not a valid IP Address`;
}

export function IpValidator(control: FormControl): ValidationErrors {
  return /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : {'ip': true};
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators: [
        {name: 'ip', validation: IpValidator},
      ],
      validationMessages: [
        {name: 'ip', message: IpValidatorMessage},
        {name: 'required', message: 'This field is required'},
      ],
    }),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
