import * as fromRoot from './../../core/store/reducers/root.reducer';
import { SigninState } from './reducers/signin.state';
import { signupReducer } from './reducers/signup.reducer';
import { signinReducer } from './reducers/signin.reducer';
import { SignupState } from './reducers/signup.state';

export interface AuthState {
  signupPage: SignupState;
  signinPage: SigninState;
}

export interface AppState extends fromRoot.AppState {
  auth: AuthState;
}

export const authReducers = {
  signupPage: signupReducer,
  signinPage: signinReducer,
};