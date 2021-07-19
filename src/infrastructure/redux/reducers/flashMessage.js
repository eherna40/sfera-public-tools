import {
  CLOSE_FLASH_MESSEGE,
  OPEN_FLASH_MESSAGE,
} from '../constants/flashMessage'

const initialState = {
  open: false,
}

const flashMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_FLASH_MESSAGE:
      return {
        ...state,
        open: true,
        mode: action.mode,
        title: action.title,
        description: action.description,
      }

    case CLOSE_FLASH_MESSEGE:
      return {
        open: false,
      }

    default:
      return state
  }
}

export default flashMessageReducer
