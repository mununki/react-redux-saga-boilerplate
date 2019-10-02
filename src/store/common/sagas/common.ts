import { call, put, select } from 'redux-saga/effects'
import { history } from '../..'
import user from '../../../apis/user'
import { REDIRECT_URI } from '../../../constants'
import { logger } from '../../../utils/logger'
import { SIGN_IN_SUCCESS } from '../../auth/actions'
import {
  APP_START,
  UPDATE_PROFILE_FAILURE,
  UPDATE_PROFILE_SUCCESS
} from '../actions'

export function* init() {
  yield put({ type: APP_START })

  const isAuth = select(state => state.isAuthenticated)
  if (isAuth) {
    yield put({ type: SIGN_IN_SUCCESS })

    try {
      const profile = yield call(user.getProfile)

      yield put({ type: UPDATE_PROFILE_SUCCESS, profile })
    } catch (error) {
      // User profile is not found
      if (error.response.status === 404) {
        yield put({ type: UPDATE_PROFILE_FAILURE })
        yield call(logger, 'USER NOT FOUND')
        yield localStorage.setItem(REDIRECT_URI, window.location.pathname)
        yield history.push('createprofile')
      }
    }
  }
}
