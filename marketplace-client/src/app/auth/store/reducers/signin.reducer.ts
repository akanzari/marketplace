import * as authAction from '../actions/auth.actions';
import { SigninState as State, SigninStateRecord } from './signin.state';
export { SigninState } from './signin.state';

export const initialState: State = new SigninStateRecord() as State;

export function signinReducer(state = initialState, action: authAction.Actions): State {
  switch (action.type) {
    case authAction.LOGIN: {
      return state.merge({
        error: null,
        pending: true,
      }) as State;
    }

    case authAction.LOGIN_SUCCESS: {
      return state.merge({
        error: null,
        pending: false,
      }) as State;
    }

    case authAction.LOGIN_FAILURE: {
      return state.merge({
        error: action.payload,
        pending: false,
      }) as State;
    }

    default: {
      return state;
    }
  }
}


