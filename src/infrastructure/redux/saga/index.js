import { all } from 'redux-saga/effects'
import { userSaga } from './user'
import { multiuserSaga } from './multiuser'
import { resetSaga } from './reset'
import { navigationSaga } from './navigation'
import { softwareSaga } from './software'

export default function* index() {
  yield all([
    userSaga(),
    multiuserSaga(),
    resetSaga(),
    navigationSaga(),
    softwareSaga(),
  ])
}
