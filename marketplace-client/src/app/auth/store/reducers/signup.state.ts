import { Map, Record } from 'immutable';
import { User } from '../../../core/models/user';

export interface SignupState extends Map<string, any> {
  loggedIn: boolean;
  user: Map<string, User>;
}

export const SignupStateRecord = Record({
  loggedIn: false,
  user: null,
});
