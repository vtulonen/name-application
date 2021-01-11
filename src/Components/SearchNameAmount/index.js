import React, { useState } from "react";
import "./styles.scss";

export default function SearchNameAmount(props) {
  const [searchTarget, setSearchTarget] = useState("");
  const [nameAmount, setNameAmount] = useState(null);
  const { names } = props;

  const amountOfName = (name) => {
    // Returns div containing the amount for the searched
    // name or informing user that the name was not found

    if (name.length === 0) return null; // Dont show anything
    let amount = 0;

    names.forEach((item) => {
      if (item.name === name) {
        amount = item.amount;
      }
    });

    if (amount > 0) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <div className="result__text">
          There are <em>{amount}</em> people named <em>{name}</em> working at
          Solita!
        </div>
      );
    } else {
      return <div className="result__text">Name not found</div>;
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setNameAmount(amountOfName(e.target.value.toLowerCase()));
    }
  };

  const handleChange = (e) => {
    setSearchTarget(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="searchbar"
        onKeyDown={handleSearch}
        onChange={handleChange}
        type="text"
        placeholder="Search for a name"
        value={searchTarget}
      />
      <div className="result name-amount">{nameAmount}</div>
    </div>
  );
}
