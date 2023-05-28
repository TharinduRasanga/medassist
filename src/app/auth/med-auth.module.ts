import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedAuthRoutingModule } from './med-auth-routing.module';
import { SignInComponent } from './sign-in.component';
import {LoginFormComponent} from '../login/login-form/login-form.component';
import {LoginPageComponent} from '../login/login-page/login-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {RegisterFormComponent} from '../login/register-form/register-form.component';


@NgModule({
  declarations: [
    SignInComponent,
    LoginFormComponent,
    LoginPageComponent,
    RegisterFormComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MedAuthRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class MedAuthModule { }
