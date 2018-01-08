import * as authAction from '../actions/auth.actions';
import { User } from '../../../core/models/user';
import { SignupState, SignupStateRecord } from './signup.state';

export const initialState: SignupState = new SignupStateRecord() as SignupState;

export function signupReducer(state = initialState, action: authAction.Actions): SignupState {
  switch (action.type) {
    
    case authAction.LOGIN_SUCCESS: {
      return state.merge({
        loggedIn: true,
        user: action.payload.user,
      }) as SignupState;
    }

    case authAction.LOGOUT: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}


