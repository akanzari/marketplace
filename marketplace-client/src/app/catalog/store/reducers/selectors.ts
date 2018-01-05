import { createFeatureSelector, createSelector } from "@ngrx/store/src/selector";
import { CatalogState } from "../interface";
import { ProductState } from "./product.state";
import { CategoryState } from "./category.state";


// Base product state selector function
export const getProductIds = (state: ProductState) => state.productIds.toJS();

export const getProductEntities = (state: ProductState) => state.productEntities.toJS();

export const getCategorieIds = (state: CategoryState) => state.categoryIds.toJS();

export const getCategorieEntities = (state: CategoryState) => state.categorieEntities.toJS();

// ******************** Individual selectors ***************************
export const selectCatalogState = createFeatureSelector<CatalogState>('catalog');

// *************************** PUBLIC API's ****************************
export const selectProductPageState = createSelector(selectCatalogState, (state: CatalogState) => state.productPage);

export const selectProductIds = createSelector(selectProductPageState, getProductIds);

export const selectProductEntities = createSelector(selectProductPageState, getProductEntities);

export const getProducts = createSelector(selectProductIds, selectProductEntities, (ids, productEntities) => ids.map(id => productEntities[id]));

export const selectCategoryPageState = createSelector(selectCatalogState, (state: CatalogState) => state.categoryPage);

export const selectCategoryIds = createSelector(selectCategoryPageState, getCategorieIds);

export const selectCategorieEntities = createSelector(selectCategoryPageState, getCategorieEntities);

export const getCategories = createSelector(selectCategoryIds, selectCategorieEntities, (ids, categoryEntities) => ids.map(id => categoryEntities[id]));
