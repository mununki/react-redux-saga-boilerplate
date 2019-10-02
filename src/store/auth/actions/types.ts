import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS
} from '../actions'

export interface ISignInSuccessAction {
  type: typeof SIGN_IN_SUCCESS
}
export interface ISignInFailureAction {
  type: typeof SIGN_IN_FAILURE
}

export interface ISignOutSuccessAction {
  type: typeof SIGN_OUT_SUCCESS
}
export interface ISignOutFailureAction {
  type: typeof SIGN_OUT_FAILURE
}

export type AuthActionTypes =
  | ISignInSuccessAction
  | ISignInFailureAction
  | ISignOutSuccessAction
  | ISignOutFailureAction
