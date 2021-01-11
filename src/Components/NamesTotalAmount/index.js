import React from "react";
import "./styles.scss";

const NamesTotalAmount = (props) => {
  //Different names
  const totalNames = props.names.length;
  //Total amount of people
  let totalPeople = 0;

  props.names.forEach((item) => {
    totalPeople += item.amount;
  });

  console.log(totalPeople);

  return (
    <div className="results total">
      <div className="result">
        <div className="result__text">
          Different names at Solita:
          <span className="result__amount">{totalNames}</span>
        </div>
      </div>

      <div className="result">
        <div className="result__text">
          Amount of people at Solita:
          <span className="result__amount">{totalPeople}</span>
        </div>
      </div>
    </div>
  );
};

export default NamesTotalAmount;
