import { put, select, takeEvery } from 'redux-saga/effects'
import { SET_PHARMA_CODE } from '../constants/general'
import { MULTIUSER_REMOVE_USER, MULTIUSER_UPDATE } from '../constants/multiuser'
import { SET_SESSION } from '../constants/navigations'
import {
  LOGIN_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAILED,
  DELETE_USER_SUCCESS,
} from '../constants/user'
import { getUsuario } from '../selectors'

function* loginUser({ code }) {
  if (code) yield put({ type: SET_PHARMA_CODE, code })
  try {
    yield put({ type: SET_SESSION })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error)
  }
}

function* update({ data, multiuser }) {
  try {
    // obtenemos los datos del usuario logado actualmente
    const usuario = yield select(getUsuario)
    // solo actualizamos si el usuario logado es igual a que se ha actualizado
    if (data && data.id) {
      if (usuario.id === data.id) yield put({ type: UPDATE_USER_SUCCESS, data })
      // mandamos a actualizar los multiuser
      if (
        data.almacenLogueado &&
        data.almacenLogueado.color &&
        data.almacenLogueado.color.color
      ) {
        data.almacenLogueado.color = data.almacenLogueado.color.color
      }
      if (multiuser) yield put({ type: MULTIUSER_UPDATE, data })
      return
    }
    if (data && data.idioma) yield put({ type: UPDATE_USER_SUCCESS, data })
  } catch (err) {
    // eslint-disable-next-line no-console
    yield put({ type: UPDATE_USER_FAILED, data })
  }
}

function* deleteUserSuccess({ user }) {
  try {
    if (user && user.id) {
      yield put({ type: MULTIUSER_REMOVE_USER, userId: user.id })
    }
  } catch (err) {
    // console.log(err)
  }
}

export function* userSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(UPDATE_USER, update)
  yield takeEvery(DELETE_USER_SUCCESS, deleteUserSuccess)
}
