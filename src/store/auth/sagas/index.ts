import { all } from 'redux-saga/effects'
import { signInFlow, signOutFlow } from './auth'

export function* authSaga() {
  yield all([signInFlow(), signOutFlow()])
}
