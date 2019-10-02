import { call, put, take } from 'redux-saga/effects'
import { history } from '../..'
import user from '../../../apis/user'
import { REDIRECT_URI } from '../../../costants'
import { logger } from '../../../utils/logger'
import {
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS
} from '../actions'

export function* updateProfile() {
  while (true) {
    const action = yield take(UPDATE_PROFILE_REQUEST)

    try {
      const profile = yield call(user.postProfile, {
        createUserViewModel: action.profile
      })

      yield put({
        type: UPDATE_PROFILE_SUCCESS,
        profile
      })
      const redirectURI = localStorage.getItem(REDIRECT_URI)
      yield history.push(
        redirectURI
          ? redirectURI === '/createprofile'
            ? '/'
            : redirectURI
          : '/'
      )
    } catch (error) {
      logger(error)
      yield put({ type: UPDATE_PROFILE_FAILURE })
    }
  }
}
