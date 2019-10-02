import {
  APP_START,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS
} from '../actions'

interface IAppStartAction {
  type: typeof APP_START
}

interface IUpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS
  profile: IProfile
}

interface IUpdateProfileFailureAction {
  type: typeof UPDATE_PROFILE_FAILURE
}

export type CommonActionTypes =
  | IAppStartAction
  | IUpdateProfileSuccessAction
  | IUpdateProfileFailureAction
