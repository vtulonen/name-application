import React from 'react'
import './styles.scss'

const NamesTotalAmount = (props) => {
  //Different names
  const totalNames = props.names.length
  //Total amount of people
  let totalPeople = 0;

  props.names.forEach(item => {
    totalPeople += item.amount
  })

console.log(totalPeople);

  return (
    
    <div className="results total">
      <div className="result">
        <div className="result__text">Different names at Solita:</div>
        <div className="result__amount">{totalNames}</div>
      </div>

      <div className="result">
        <div className="result__text">Total amount of
        people at Solita:</div>
        <div className="result__amount">{totalPeople}</div>
      </div>
    </div>
  
  )
}

export default NamesTotalAmount
