import {
  NAVIGATION_DELETE,
  NAVIGATION_PUSH,
  NAVIGATION_PUSH_SUCCESS,
  NAVIGATION_PUSH_FAILED,
  NAVIGATION_TOGGLE,
  SET_SESSION,
  SET_SESSION_SUCCESS,
} from '../constants/navigations'

export const actionPush = (stack) => ({
  type: NAVIGATION_PUSH,
  stack,
})

export const actionPushSuccess = (stack) => ({
  type: NAVIGATION_PUSH_SUCCESS,
  stack,
})

export const actionPushFailed = (stack) => ({
  type: NAVIGATION_PUSH_FAILED,
  stack,
})

export const actionDelete = (stack) => ({
  type: NAVIGATION_DELETE,
  stack,
})

export const actionToggle = (stack) => ({
  type: NAVIGATION_TOGGLE,
  stack,
})

export const actionSetSession = () => ({
  type: SET_SESSION,
})
export const actionSetSessionSuccess = (session) => ({
  type: SET_SESSION_SUCCESS,
  session,
})
