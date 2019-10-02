import { call, cancel, fork, put, take } from 'redux-saga/effects'
import { history } from '../..'
import api from '../../../apis/api'
import { logger } from '../../../utils/logger'
import {
  OAUTH_SIGN_IN_FAILURE,
  OAUTH_SIGN_IN_SUCCESS,
  SIGN_IN_EMAIL_REQUEST,
  SIGN_IN_FACEBOOK_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_GOOGLE_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
  SIGN_OUT_REQUEST,
  SIGN_UP_EMAIL_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS
} from '../actions'

export function* signInFlow() {
  while (true) {
    const signInAction = yield take([
      SIGN_IN_EMAIL_REQUEST,
      SIGN_UP_EMAIL_REQUEST
    ])

    let signInTask
    let OAuthAction
    switch (signInAction.type) {
      case SIGN_IN_EMAIL_REQUEST:
        signInTask = yield fork(
          signInROPC,
          signInAction.payload.email,
          signInAction.payload.password
        )
        break
      case SIGN_UP_EMAIL_REQUEST:
        signInTask = yield fork(
          signUpROPC,
          signInAction.payload.email,
          signInAction.payload.password
          // signInAction.payload.firstName
          // signInAction.payload.lastName,
        )
        break
      case SIGN_IN_GOOGLE_REQUEST:
        signInTask = yield fork(signInGoogle)

        break
      case SIGN_IN_FACEBOOK_REQUEST:
        signInTask = yield fork(signInFacebook)

        OAuthAction = yield take([OAUTH_SIGN_IN_SUCCESS, OAUTH_SIGN_IN_FAILURE])

        switch (OAuthAction.type) {
          case OAUTH_SIGN_IN_SUCCESS:
            logger('OAuth sign in success')
            break
        }
        break
    }

    const actions = yield take([
      SIGN_IN_SUCCESS,
      SIGN_IN_FAILURE,
      SIGN_UP_SUCCESS,
      SIGN_UP_FAILURE,
      SIGN_OUT_REQUEST
    ])
    switch (actions.type) {
      case SIGN_IN_SUCCESS:
        // Yield init()
        break
      case SIGN_IN_FAILURE:
        break
      case SIGN_UP_SUCCESS:
        // Yield init()
        break
      case SIGN_UP_FAILURE:
        break
      case SIGN_OUT_REQUEST:
        yield cancel(signInTask)
        break
    }
  }
}

export function* signOutFlow() {
  while (true) {
    yield take(SIGN_OUT_REQUEST)
    yield call(signOut)
    yield put({ type: SIGN_OUT })
    yield history.push('Explore')
  }
}

function* signInROPC(email: string, password: string) {
  // Call sign in API
}

function* signUpROPC(email: string, password: string) {
  // Call sign up API
}

function* signInGoogle() {
  // Call sign in Google
}

function* signInFacebook() {
  // Call sign in Facebook
}

function* signOut() {
  try {
    yield call(api.postData, '/logout')
  } catch (error) {}
}
