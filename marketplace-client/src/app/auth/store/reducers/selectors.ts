import { SigninState } from "./signin.state";
import { SignupState } from "./signup.state";
import { AuthState } from "../interface";
import { createFeatureSelector, createSelector } from "@ngrx/store/src/selector";

// Base product state selector function
export const getError = (state: SigninState) => state.error;

export const getPending = (state: SigninState) => state.pending;

export const getLogged = (state: SignupState) => state.loggedIn;

export const getUserData = (state: SignupState) => state.user.toJS();

// ******************** Individual selectors ***************************
export const selectAuthState = createFeatureSelector<AuthState>('auth');

// *************************** PUBLIC API's ****************************
export const selectAuthStatusState = createSelector(selectAuthState, (state: AuthState) => state.signupPage);

export const getLoggedIn = createSelector(selectAuthStatusState, getLogged);

export const getUser = createSelector(selectAuthStatusState, getUserData);

export const selectLoginPageState = createSelector(selectAuthState, (state: AuthState) => state.signinPage);

export const getLoginPageError = createSelector(selectLoginPageState, getError);

export const getLoginPagePending = createSelector(selectLoginPageState, getPending);
