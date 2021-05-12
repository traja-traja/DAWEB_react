import React from "react";
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className="polozka" onClick={handleClick}>
      <div className="polozka__nazev">{props.nazev}</div>
      <div className="polozka__mnozstvi">{props.mnozstvi} ks</div>
    </div>
  );
};

export default ShoppingItem;
