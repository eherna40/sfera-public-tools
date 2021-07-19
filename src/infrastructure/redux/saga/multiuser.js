import { takeEvery, put, select } from 'redux-saga/effects'
import {
  MULTIUSER_REMOVE_USER,
  MULTIUSER_REMOVE_USER_SUCCESS,
  MULTIUSER_UPDATE,
  MULTIUSER_UPDATE_SUCCESS,
} from '../constants/multiuser'
import { getUsers } from '../selectors'

function* updateUsers({ data }) {
  const users = yield select(getUsers)
  if (users && users.length > 0) {
    const filtered = users.filter((i) => {
      if (i.id === data.id) {
        i.nombre = data.nombre || i.nombre
        i.avatar = data?.avatar || i.avatar
        i.nickname = data.nickname || i.nickname
      }
      return i
    })
    yield put({ type: MULTIUSER_UPDATE_SUCCESS, data: filtered })
  }
}

function* removeMultiusers({ userId }) {
  const users = yield select(getUsers)
  // console.log(users, userId)
  const filtered = users.filter((i) => i.id !== userId)
  if (filtered)
    yield put({ type: MULTIUSER_REMOVE_USER_SUCCESS, users: filtered })
}
export function* multiuserSaga() {
  yield takeEvery(MULTIUSER_UPDATE, updateUsers)
  yield takeEvery(MULTIUSER_REMOVE_USER, removeMultiusers)
}
