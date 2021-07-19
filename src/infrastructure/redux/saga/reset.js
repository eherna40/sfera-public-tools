import { put, takeEvery } from 'redux-saga/effects'
import { LOGOUT_USER } from '../constants/user'
import { CLEAN_AGGRID } from '../constants/aggrid'
import { CLEAN_FAVORITES } from '../constants/favorites'
import { CLEAN_NAVIGATION } from '../constants/navigations'
import { CLEAN_SOFTWARE } from '../constants/software'

function* reset() {
  yield put({ type: CLEAN_AGGRID })
  yield put({ type: CLEAN_FAVORITES })
  yield put({ type: CLEAN_NAVIGATION })
  yield put({ type: CLEAN_SOFTWARE })
}

export function* resetSaga() {
  yield takeEvery(LOGOUT_USER, reset)
}
