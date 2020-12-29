import React from 'react'

// List names in alphabetical order
const ListNames = (props) => {
  let sortedItems = props.names.sort((a, b) => a.name.localeCompare(b.name));
  
  let items = sortedItems.map((item, index) => 
    <div className="result" key={index}>
      <div className="result__name">{item.name}</div>
    </div>
  );

  return (
    <div className="results orderd-alphabetically">
      {items}
    </div>
  )
}

export default ListNames;

