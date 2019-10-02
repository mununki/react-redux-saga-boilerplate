import { all } from 'redux-saga/effects'
import { init } from './common'
import { updateProfile } from './profile'

export function* commonSaga() {
  yield all([init(), updateProfile()])
}
