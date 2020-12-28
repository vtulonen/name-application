import React from 'react'

const NamesTotalAmount = (props) => {
  const total = props.names.length
  
  return (
    <div className="results names-total">
      <div className="result">
        <div className="result__text">Total amount of different names at Solita:</div>
        <div className="result__amount">{total}</div>
      </div>
    </div>
  )
}

export default NamesTotalAmount
