import { takeEvery, select, put } from 'redux-saga/effects'
import {
  NAVIGATION_PUSH,
  NAVIGATION_PUSH_FAILED,
  NAVIGATION_PUSH_SUCCESS,
} from '../constants/navigations'
import { SELECT_SOFTWARE } from '../constants/software'
import { getSoftware } from '../selectors'

function* onPushItem({ stack }) {
  try {
    const { softwares } = yield select(getSoftware)
    const data = []
    let softwareItem = {}
    stack.forEach((i) => {
      const tab = {
        ...i,
      }
      if (tab.active) {
        if (tab.key !== '-1') {
          if (tab.software) softwareItem = tab.software

          // sino tienen ningun objeto software colocamos el perfil sfera
          if (Number(tab.software_id) === 0) {
            tab.software = softwares.find(
              (sft) => Number(sft.id) === Number(tab.software_id),
            )
            softwareItem = tab.software
          }
        }
      }
      data.push(tab)
    })
    yield put({ type: NAVIGATION_PUSH_SUCCESS, stack: data })
    yield put({ type: SELECT_SOFTWARE, software: softwareItem })
    // if (softwares) {
    //   const finded = softwares.find((i) => i.id === softwareItem.id)
    //   yield put({ type: SELECT_SOFTWARE_SUCCESS, software: finded || {} })
    // }
  } catch (err) {
    yield put({ type: NAVIGATION_PUSH_FAILED })
  }
}

export function* navigationSaga() {
  yield takeEvery(NAVIGATION_PUSH, onPushItem)
}
