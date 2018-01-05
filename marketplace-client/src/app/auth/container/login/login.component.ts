import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Authenticate } from '../../models/user';
import { Store } from '@ngrx/store';
import * as fromAuth from '../../store/interface';
import * as Auth from '../../store/actions/auth.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { getLoginPagePending, getLoginPageError, getLoggedIn } from '../../store/reducers/selectors';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </app-login-form>
  `,
  styles: []
})
export class LoginComponent implements OnInit, OnDestroy {

  pending$ = this.store.select(getLoginPagePending);
  error$ = this.store.select(getLoginPageError);
  returnUrl: string;
  redirectSubs: Subscription;

  constructor(
    public store: Store<fromAuth.AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.store.dispatch(new Auth.Authorized());
    this.redirectIfUserLoggedIn();
  }

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Auth.Login($event));
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
