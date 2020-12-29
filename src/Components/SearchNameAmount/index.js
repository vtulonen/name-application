import React, { useState } from 'react'

export default function SearchNameAmount(props) {
  const [searchTarget, setSearchTarget] = useState('');
  const [nameAmount, setNameAmount] = useState(null);
  const { names } = props;

    
  const amountOfName = (name) => {
    // Returns a string containing the amount for the searched
    // name or a string informing user that the name was not found
    
    if (name.length === 0) return ''; // Dont show anything
    let amount = 0;

    names.forEach(item => {
      if (item.name === name) {
        amount = item.amount;
      }
    })
    
    if (amount > 0) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      return (`There are ${amount} people named ${name} working at Solita!`)
    } else {
      return 'Name not found'
    }
  }

  const handleSearch = e => {
    if (e.key === 'Enter') {
      setNameAmount(amountOfName(e.target.value.toLowerCase()))
    }
  }

  const handleChange = e => {
    setSearchTarget(e.target.value);
  }

  return (
    <div className="container">
      <input className="searchbar"
        onKeyDown={handleSearch}
        onChange={handleChange}
        type="text"
        placeholder="Search name"
        value={searchTarget}
      />
      <div className="result search-result">
      <div className="result__text">
          {nameAmount}
        </div>
        
        
      </div>
    </div>
  )
}


