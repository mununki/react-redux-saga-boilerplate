import {
  APP_START,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS
} from '../actions'
import { CommonActionTypes } from '../actions/types'

interface ICommonState {
  pending: boolean
  appStart: boolean
  profile: IProfile | null
}

const initCommonState: ICommonState = {
  pending: false,
  appStart: false,
  profile: null
}

export const common = (state = initCommonState, action: CommonActionTypes) => {
  switch (action.type) {
    case APP_START:
      return { ...state, appStart: true, pending: false }
    case UPDATE_PROFILE_SUCCESS:
      return { ...state, profile: action.profile }
    case UPDATE_PROFILE_FAILURE:
      return { ...state, profile: null }
    default:
      return state
  }
}
