import React from "react";
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  return (
    <div className="polozka">
      <div className="polozka__nazev">{props.nazev}</div>
      <div className="polozka__mnozstvi">{props.mnozstvi} ks</div>
    </div>
  );
};

export default ShoppingItem;
