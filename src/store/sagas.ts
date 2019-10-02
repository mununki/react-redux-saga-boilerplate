import { all } from '@redux-saga/core/effects'
import { authSaga } from './auth/sagas'
import { commonSaga } from './common/sagas'

export default function* rootSaga() {
  yield all([commonSaga(), authSaga()])
}
