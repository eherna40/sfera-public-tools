import {
  OPEN_MODAL_EMPLOYEE,
  OPEN_MODAL_EMPLOYEE_FAILED,
  OPEN_MODAL_EMPLOYEE_SUCCESS,
} from '../constants/employees'

export const actionOpenModalEmployee = () => ({ type: OPEN_MODAL_EMPLOYEE })
export const actionOpenModalEmployeeSuccess = () => ({
  type: OPEN_MODAL_EMPLOYEE_SUCCESS,
})
export const actionOpenModalEmployeeFailed = () => ({
  type: OPEN_MODAL_EMPLOYEE_FAILED,
})
