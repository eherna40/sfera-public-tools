import {
  CHECK_OPEN_CASH,
  CHECK_OPEN_CASH_FAILED,
  CHECK_OPEN_CASH_SUCCESS,
  SET_COUNTER_DESK,
  SET_COUNTER_DESK_FAIL,
  SET_COUNTER_DESK_SUCCESS,
} from '../constants/counterDesk'

export const actionSetCounterDesk = () => ({
  type: SET_COUNTER_DESK,
})

export const actionSetCounterDeskSuccess = (counterDesk) => ({
  type: SET_COUNTER_DESK_SUCCESS,
  counterDesk,
})

export const actionSetCounterDeskFail = (error) => ({
  type: SET_COUNTER_DESK_FAIL,
  error,
})

export const actionCheckOpen = () => ({
  type: CHECK_OPEN_CASH,
})

export const actionCheckOpenSuccess = (open) => ({
  type: CHECK_OPEN_CASH_SUCCESS,
  open,
})

export const actionCheckOpenFailed = (error) => ({
  type: CHECK_OPEN_CASH_FAILED,
  error,
})
