import { useDispatch, useSelector } from 'react-redux'
import { actionOpenFlashhMessage } from '../redux/actions/flashMessage'

// Hook
function useFlashMessage() {
  // State and setters for debounced value
  const open = useSelector((state) => state.flashMessageReducer.open)
  const dispatch = useDispatch()

  const showMessage = (mode, description, title) => {
    if (!open) {
      dispatch(actionOpenFlashhMessage(mode, description, title))
    }
  }
  return { showMessage }
}

export default useFlashMessage
