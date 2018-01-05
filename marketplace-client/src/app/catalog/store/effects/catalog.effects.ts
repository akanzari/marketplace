import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import { Observable } from 'rxjs/Observable';
import * as catalogAction from '../actions/catalog.actions';
import { CatalogService } from '../../services/catalog.service';
import { Product } from '../../models/product';
import { of } from 'rxjs/observable/of';
import { Category } from '../../models/category';

@Injectable()
export class CatalogEffects {

  constructor(private actions$: Actions, private catalogService: CatalogService, private router: Router) { }

  @Effect()
  fetchProducts$ = this.actions$
    .ofType(catalogAction.FETCH_PRODUCTS)
    .map(toPayload)
    .switchMap((payload) => this.catalogService.fetchProductsByCategorySlug(payload))
    .map((data: Product[]) => new catalogAction.FetchProductsSuccess({ products: data }))
    .catch(error => of(new catalogAction.FetchProductsFailure(error)));

  @Effect()
  fetchCategories$ = this.actions$
    .ofType(catalogAction.FETCH_CATEGORIES)
    .switchMap(() => this.catalogService.fetchCategories())
    .map((data: Category[]) => new catalogAction.FetchCategoriesSuccess({ categories: data }))
    .catch(error => of(new catalogAction.FetchProductsFailure(error)));

}
