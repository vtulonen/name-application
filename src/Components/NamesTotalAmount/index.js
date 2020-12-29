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
    <>
    <div className="results total-names">
      <div className="result">
        <div className="result__text">Total amount of different names at Solita:</div>
        <div className="result__amount">{totalNames}</div>
      </div>
    </div>

    <div className="results total-people">
      <div className="result">
        <div className="result__text">Total amount of 
        people at Solita:</div>
        <div className="result__amount">{totalPeople}</div>
      </div>
    </div>
    </>
  )
}

export default NamesTotalAmount
