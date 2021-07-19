import {
  CLOSE_FLASH_MESSEGE,
  OPEN_FLASH_MESSAGE,
} from '../constants/flashMessage'

export const actionOpenFlashhMessage = (mode, title, description) => ({
  type: OPEN_FLASH_MESSAGE,
  mode,
  title,
  description,
})

export const actionCloseFlashMessage = () => ({
  type: CLOSE_FLASH_MESSEGE,
})
