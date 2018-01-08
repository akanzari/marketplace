import * as fromRoot from './../../app.reducer';
import { ProductState } from './reducers/product.state';
import { productReducer } from './reducers/product.reducer';
import { CategoryState } from './reducers/category.state';
import { categoryReducer } from './reducers/category.reducer';

export interface CatalogState {
    productPage: ProductState;
    categoryPage: CategoryState;
}

export interface AppState extends fromRoot.AppState {
    catalog: CatalogState
}

export const catalogReducers = {
    productPage: productReducer,
    categoryPage: categoryReducer
};