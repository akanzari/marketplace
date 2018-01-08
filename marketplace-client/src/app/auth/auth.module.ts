import { AuthService } from './services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { authReducers } from './store/interface';
import { AuthEffects } from './store/effects/auth.effect';
import { AuthComponent } from './components/auth.component';

export const COMPONENTS = [
  AuthComponent,
  SignInFormComponent,
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
