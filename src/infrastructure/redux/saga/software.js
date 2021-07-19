import { takeEvery, select, put } from 'redux-saga/effects'
import {
  SELECT_SOFTWARE,
  SELECT_SOFTWARE_FAILED,
  SELECT_SOFTWARE_SUCCESS,
} from '../constants/software'
import { getSoftware } from '../selectors'

function* onSelectSoftware({ software }) {
  try {
    const { softwares } = yield select(getSoftware)
    const finded = softwares.find((i) => Number(i.id) === Number(software.id))
    yield put({ type: SELECT_SOFTWARE_SUCCESS, software: finded || {} })
  } catch (err) {
    yield put({ type: SELECT_SOFTWARE_FAILED })
  }
}

export function* softwareSaga() {
  yield takeEvery(SELECT_SOFTWARE, onSelectSoftware)
}
