import React from 'react'

const LoadError = ({ onLoadError }) => {
  const click = () => {
    onLoadError()
  }
  return (
    <div>
      <h2>Error Loading</h2>
      <button onClick={() => click()}>Reload</button>
    </div>
  )
}


export default LoadError
