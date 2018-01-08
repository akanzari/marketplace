import { Action } from '@ngrx/store';
import { Product } from '../../../core/models/product';
import { Category } from '../../../core/models/category';

export const FETCH_PRODUCTS = '[Product] Fetch Products';
export const FETCH_PRODUCTS_SUCCESS = '[Product] Fetch Products Success';
export const FETCH_PRODUCTS_FAILURE = '[Product] Fetch Products Failure';

export const FETCH_CATEGORIES = '[Category] Fetch Categories';
export const FETCH_CATEGORIES_SUCCESS = '[Category] Fetch Categories Success';
export const FETCH_CATEGORIES_FAILURE = '[Category] Fetch Categories Failure';

export class FetchProducts implements Action {
  readonly type = FETCH_PRODUCTS;

  constructor(public payload: { slug: string }) { }
}

export class FetchProductsSuccess implements Action {
  readonly type = FETCH_PRODUCTS_SUCCESS;

  constructor(public payload: { products: Product[] }) { }
}

export class FetchProductsFailure implements Action {
  readonly type = FETCH_PRODUCTS_FAILURE;

  constructor(public payload: any) { }
}

export class FetchCategories implements Action {
  readonly type = FETCH_CATEGORIES;
}

export class FetchCategoriesSuccess implements Action {
  readonly type = FETCH_CATEGORIES_SUCCESS;

  constructor(public payload: { categories: Category[] }) { }
}

export class FetchCategoriesFailure implements Action {
  readonly type = FETCH_CATEGORIES_FAILURE;

  constructor(public payload: any) { }
}

export type Actions =
  | FetchProducts
  | FetchProductsSuccess
  | FetchProductsFailure
  | FetchCategories
  | FetchCategoriesSuccess
  | FetchCategoriesFailure;  
