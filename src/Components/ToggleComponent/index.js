import React, { useState } from "react";
import "./styles.scss";

//Toggle button displays results component
const ToggleComponent = (props) => {
  const [showResults, setShowResults] = useState(false);
  const handleClick = () => setShowResults(!showResults);
  const { component, btnText, toolTipText } = props;
  return (
    <div className="component-container">
      <button className="btn" tool-tip={toolTipText} onClick={handleClick}>
        {btnText}
      </button>
      {showResults ? component : null}
    </div>
  );
};

export default ToggleComponent;
