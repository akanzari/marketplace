import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';

import { AuthService } from '../../services/auth.service';
import * as authAction from '../actions/auth.actions';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

  @Effect()
  login$ = this.actions$
    .ofType(authAction.LOGIN)
    .map((action: authAction.Login) => action.payload)
    .exhaustMap(auth =>
      this.authService
        .login(auth)
        .map(user => new authAction.LoginSuccess({ user }))
        .catch(error => of(new authAction.LoginFailure(error)))
    );

  @Effect()
  register$ = this.actions$
    .ofType(authAction.REGISTER)
    .map((action: authAction.Register) => action.payload)
    .exhaustMap(auth =>
      this.authService
        .register(auth)
        .map(user => new authAction.LoginSuccess({ user }))
        .catch(error => of(new authAction.LoginFailure(error)))
    );

  @Effect({ dispatch: false })
  loginSuccess$ = this.actions$
    .ofType(authAction.LOGIN_SUCCESS)
    .do(() => this.router.navigate(['/']));

  @Effect({ dispatch: false })
  loginRedirect$ = this.actions$
    .ofType(authAction.LOGIN_REDIRECT)
    .map((action: authAction.LoginRedirect) => action.payload)
    .do(params => {
      this.router.navigate(['/auth/login'], { ...params });
    });

  @Effect({ dispatch: false })
  logoutRedirect$ = this.actions$
    .ofType(authAction.LOGOUT)
    .exhaustMap(auth =>
      this.authService
        .logout()
        .map(() => this.router.navigate(['/auth/login']))
        .catch(error => of(new authAction.LoginFailure(error)))
    );

  @Effect()
  authorized$ = this.actions$
    .ofType(authAction.AUTHORIZED)
    .switchMap(() => this.authService.authorized())
    .filter<boolean>(status => status)
    .switchMap(() => this.authService.current_user())
    .map(user => new authAction.LoginSuccess({ user }));

}
