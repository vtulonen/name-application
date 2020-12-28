import React, { useState } from 'react'

export default function SearchNameAmount(props) {
  const [searchTarget, setSearchTarget] = useState('');
  const [nameAmount, setNameAmount] = useState(null);
  const { names } = props;

  const amountOfName = (name) => {
    let amount = 0;
    names.forEach(item => {
      if (item.name.toLowerCase() === name.toLowerCase()) {
        amount = item.amount;
      }
    })
    return amount;
  }

  const handleSearch = e => {
    if (e.key === 'Enter') {
      setNameAmount(amountOfName(e.target.value))
    }
  }

  const handleChange = e => {
    setSearchTarget(e.target.value);
  }

  return (
    <div>
      <input
        onKeyDown={handleSearch}
        onChange={handleChange}
        type="text"
        placeholder="Search name"
        value={searchTarget}
      />
      <div>
        {nameAmount}
      </div>
    </div>
  )
}


