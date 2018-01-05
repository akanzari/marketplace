import { ProductState, ProductStateRecord } from "./product.state";
import * as catalogAction from '../actions/catalog.actions';
import { Product } from "../../models/product";

export const initialState: ProductState = new ProductStateRecord() as ProductState;

export function productReducer(state = initialState, action: catalogAction.Actions): ProductState {
  switch (action.type) {

    case catalogAction.FETCH_PRODUCTS_SUCCESS:
      const _products: Product[] = action.payload.products;
      const _productIds: string[] = _products.map(product => product.id);
      const _productEntities = _products.reduce((products: { [id: string]: Product }, product: Product) => {
        return Object.assign(products, { [product.id]: product });
      }, {});
      return state.merge({ productIds: _productIds, productEntities: _productEntities }) as ProductState;

    default: {
      return state;
    }
  }
}


