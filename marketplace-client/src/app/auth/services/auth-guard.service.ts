
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Auth from '../store/actions/auth.actions';
import { AppState } from '../store/interface';
import { getLoggedIn } from '../store/reducers/selectors';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(getLoggedIn).map(authed => {
      if (!authed) {
        this.store.dispatch(new Auth.LoginRedirect({ queryParams: { returnUrl: state.url } }));
        return false;
      }
      return true;
    }).take(1);
  }
  
}