import { Map, Record } from 'immutable';
import { User } from '../../../core/models/user';

export interface SigninState extends Map<string, any> {
  error: string | null;
  pending: boolean;
}

export const SigninStateRecord = Record({
  error: null,
  pending: false,
});
