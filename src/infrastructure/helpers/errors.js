import { store } from '../redux/store'
import { actionSetErrorsGlobal } from '../redux/actions/errors'
import { actionLogoutUser } from '../redux/actions/user'

export const setError = (message, category, isAuth, validation) => {
  try {
    // console.log(message, category, isAuth, validation)

    if (category === 'authentication') {
      store.dispatch(actionLogoutUser())
      return
    }
    if (category === 'validation') {
      if (
        validation.email ||
        validation.nickname ||
        validation.pin ||
        validation.dni
      ) {
        return
      }
      const msg = Object.keys(validation)[0]
      store.dispatch(actionSetErrorsGlobal(true, validation[msg][0], category))
      return
    }

    if (isAuth === 'Unauthenticated.') {
      store.dispatch(actionLogoutUser())
      return
    }

    store.dispatch(actionSetErrorsGlobal(true, message, category))
  } catch (error) {
    store.dispatch(actionLogoutUser())
  }
}
