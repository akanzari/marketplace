import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../../app.reducer';
import { AppState } from '../../../auth/store/interface';
import { Logout, Authorized } from '../../../auth/store/actions/auth.actions';
import { getLoggedIn } from '../../../auth/store/reducers/selectors';
import { FetchCategories, FetchProducts } from '../../../catalog/store/actions/catalog.actions';
import { getCategories } from '../../../catalog/store/reducers/selectors';

@Component({
  selector: 'app-header',
  template: `
    <app-top-bar [isLoggedIn]="isLoggedIn$ | async" (logoutClick)="logout()"></app-top-bar>
    <app-middle-bar [categories]="categories$ | async"></app-middle-bar>
    <app-nav-bar [categories]="categories$ | async"></app-nav-bar>
  `
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  categories$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.categories$ = this.store.select(getCategories);
  }

  ngOnInit() {
    this.store.dispatch(new Authorized());
    this.isLoggedIn$ = this.store.select(getLoggedIn);
    this.store.dispatch(new FetchCategories());
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}