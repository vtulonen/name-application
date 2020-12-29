import React from 'react'
import './styles.scss'

// List names and amounts ordered by amount, most popular first
const ListAll = (props) => {
  let sortedItems = props.names.sort((a, b) => b.amount - a.amount);
  
  let items = sortedItems.map((item, index) => 
    <div className="result" key={index}>
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

