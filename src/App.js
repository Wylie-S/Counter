import React, { useState } from "react";
import "./App.css";

function CountHook() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const handleReset = () => {
    setCount(count - count);
  };
  return (
    <div className="container">
      <h3 className="appnamer">Counter</h3>
      <div className="current">{count}</div>
      <div className="button-div">
        <button className="count-click" onClick={handleClick}>
          Click
        </button>{" "}
        <button className="count-click" onClick={handleReset}>
          Reset
        </button>{" "}
      </div>

      <h4 className="tagliner">Sarah Wylie</h4>
      <div />
    </div>
  );
}

export default CountHook;
