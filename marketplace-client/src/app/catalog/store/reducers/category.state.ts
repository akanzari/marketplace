import { Category } from '../../models/category';
import { Map, Record, List } from 'immutable';

export interface CategoryState extends Map<string, any> {
    categoryIds: List<string>;
    categorieEntities: Map<string, Category>;
}

export const CategoryStateRecord = Record({
    categoryIds: List([]),
    categorieEntities: Map({})
});