import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import * as catalogActions from '../../catalog/store/actions/catalog.actions';
import * as fromRoot from './../../core/store/reducers/root.reducer';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../core/models/product';
import { getProducts } from '../store/reducers/selectors';

@Component({
  selector: 'app-home',
  template: `
    <app-breadcrumb></app-breadcrumb>
    <div class="col-xs-12">
      <div class="col-xs-3">
      </div>
      <div class="col-xs-9">
        <app-content [products]="products$ | async"></app-content>
      </div>
    </div>
  `
})
export class ProductHomeComponent {

  products$: Observable<Product[]>;

  constructor(private store: Store<fromRoot.AppState>, private route: ActivatedRoute) {
    this.products$ = this.store.select(getProducts);
    this.route.params.subscribe(
      (params: any) => {
        this.store.dispatch(new catalogActions.FetchProducts(params['id']));
      }
    );
  }

}