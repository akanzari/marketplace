import { Product } from '../../../core/models/product';
import { Map, Record, List } from 'immutable';

export interface ProductState extends Map<string, any> {
  productIds: List<string>;
  productEntities: Map<string, Product>;
}

export const ProductStateRecord = Record({
  productIds: List([]),
  productEntities: Map({})
});