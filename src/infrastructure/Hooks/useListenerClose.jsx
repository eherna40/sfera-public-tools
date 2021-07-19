import { useEffect, useRef } from 'react'

const useListenerClose = (onClose, esc) => {
  const ref = useRef()

  const toggle = () => {
    onClose()
  }

  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      toggle()
    }
  }

  const handleKey = (e) => {
    if (esc && e.key === 'Escape') {
      toggle()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)
    if (esc) {
      document.addEventListener('keydown', handleKey)
    }

    return () => {
      document.removeEventListener('mousedown', handleClick)
      if (esc) {
        document.removeEventListener('keydown', handleKey)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, toggle }
}

export default useListenerClose
