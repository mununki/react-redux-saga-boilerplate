import {
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS
} from '../actions'
import { AuthActionTypes } from '../actions/types'

interface IAuthInitState {
  isAuthenticated: boolean
}

const initAuthState: IAuthInitState = {
  isAuthenticated: false
}

export const auth = (state = initAuthState, action: AuthActionTypes) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, isAuthenticated: true }
    case SIGN_IN_FAILURE:
      return { ...state, isAuthenticated: false }
    case SIGN_OUT_SUCCESS:
      return { ...state, isAuthenticated: false }
    case SIGN_OUT_FAILURE:
      return { ...state }
    default:
      return state
  }
}
