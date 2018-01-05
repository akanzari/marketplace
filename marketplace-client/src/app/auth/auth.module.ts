import { AuthService } from './services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './container/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { authReducers } from './store/interface';
import { AuthEffects } from './store/effects/auth.effect';

export const COMPONENTS = [
  LoginComponent,
  LoginFormComponent,
  SignUpComponent,
  SignUpFormComponent
];

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: COMPONENTS
})
export class AuthModule {
  static forRoot() {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService]
    };
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class RootAuthModule {}
