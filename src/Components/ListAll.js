import React, { useState } from 'react'

//Toggle button displays results component
const ListAll = (props) => {
  const [showResults, setShowResults] = useState(false)
  const handleClick = () => setShowResults(!showResults)

  return (
    <div>
      <button onClick={handleClick}>List All</button>
      { showResults ? <ResultsOrderedByAmount names={props.names}/> : null }
    </div>
  )
}

// Names and amounts ordered by amount, most popular first
const ResultsOrderedByAmount = (props) => {
  let sortedItems = props.names.sort((a, b) => b.amount - a.amount);
  
  let items = sortedItems.map((item) => 
    <div className="result">
      <div className="result__name">{item.name}</div>
      <div className="result__amount">{item.amount}</div>
    </div>
  );

  return (
    <div className="results orderd-by-amount">
      {items}
    </div>
  )
}

export default ListAll;

