import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';


export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];
