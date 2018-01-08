import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Injectable, OnDestroy } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from './../../app.reducer';
import { getLoggedIn } from '../../auth/store/reducers/selectors';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate, OnDestroy {

    isAuthenticated: boolean;
    subscription: Subscription;

    constructor(private router: Router, public store: Store<fromRoot.AppState>) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.subscription = this.store.select(getLoggedIn).subscribe(isAuthenticated => {
            this.isAuthenticated = isAuthenticated;
            if (!isAuthenticated) {
                this.router.navigate(
                    ['/auth/signin'],
                    { queryParams: { returnUrl: state.url } }
                );
            }
        });
        return this.isAuthenticated;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
