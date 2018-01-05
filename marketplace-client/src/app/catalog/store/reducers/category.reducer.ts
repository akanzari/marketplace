import { CategoryState, CategoryStateRecord } from "./category.state";
import * as catalogAction from '../actions/catalog.actions';
import { Product } from "../../models/product";
import { Category } from "../../models/category";

export const initialState: CategoryState = new CategoryStateRecord() as CategoryState;

export function categoryReducer(state = initialState, action: catalogAction.Actions): CategoryState {
  switch (action.type) {

    case catalogAction.FETCH_CATEGORIES_SUCCESS:
      const _categories: Category[] = action.payload.categories;
      const _categoryIds: string[] = _categories.map(category => category.id);
      const _categorieEntities = _categories.reduce((categories: { [id: string]: Category }, category: Category) => {
        return Object.assign(categories, { [category.id]: category });
      }, {});
      return state.merge({ categoryIds: _categoryIds, categorieEntities: _categorieEntities }) as CategoryState;
    default: {
      return state;
    }
  }
}


