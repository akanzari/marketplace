import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from './../../core/store/reducers/root.reducer';
import { AppState } from '../../auth/store/interface';
import { Logout, Authorized } from '../../auth/store/actions/auth.actions';
import { getLoggedIn } from '../../auth/store/reducers/selectors';
import { FetchCategories, FetchProducts } from '../../catalog/store/actions/catalog.actions';
import { getCategories } from '../../catalog/store/reducers/selectors';
import * as catalogActions from '../../catalog/store/actions/catalog.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  currentParam: string;
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

  selectCategory(slug) {
    this.store.dispatch(new catalogActions.FetchProducts(slug));
  }

  logout() {
    this.store.dispatch(new Logout());
  }

}