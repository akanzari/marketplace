import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from '../../core/models/user';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store/interface';
import * as authActions from '../store/actions/auth.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { getLoginPagePending, getLoginPageError, getLoggedIn } from '../store/reducers/selectors';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  pending$ = this.store.select(getLoginPagePending);
  error$ = this.store.select(getLoginPageError);
  returnUrl: string;
  redirectSubs: Subscription;

  constructor( public store: Store<fromAuth.AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(new authActions.Authorized());
    this.redirectIfUserLoggedIn();
  }

  onSubmitLogin($event: Authenticate) {
    this.store.dispatch(new authActions.Login($event));
  }

  onSubmitRegister($event: Authenticate) {
    this.store.dispatch(new authActions.Register($event));
  }

  redirectIfUserLoggedIn() {
    this.redirectSubs = this.store.select(getLoggedIn).subscribe(
      authed =>
        authed === true ? this.router.navigateByUrl('/') : null
    );
  }

  ngOnDestroy() {
    this.redirectSubs.unsubscribe();
  }

}
