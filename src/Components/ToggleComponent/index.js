import React, { useState } from 'react'
import './styles.scss'

//Toggle button displays results component
const ToggleComponent = (props) => {
  const [showResults, setShowResults] = useState(false)
  const handleClick = () => setShowResults(!showResults)
  const { component, btnText} = props;
  return (
    <div className="btn-container">
      <button className="btn" onClick={handleClick}>{btnText}</button>
      { showResults ? component : null }
    </div>
  )
}

export default ToggleComponent;