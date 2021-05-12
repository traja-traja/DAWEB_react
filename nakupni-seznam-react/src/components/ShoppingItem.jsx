import React, { useState } from "react";
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  const handleClick = () => {
    props.onBoughtChange(props.nazev);
  };

  if (props.skrytKoupene && koupeno) {
    return (null);
  }

  return (
    <div
      className={props.koupeno ? "polozka polozka--koupeno" : "polozka"}
      onClick={handleClick}
    >
      <div className="polozka__nazev">{props.nazev}</div>
      <div className="polozka__mnozstvi">{props.mnozstvi} ks</div>
    </div>
  );
};

export default ShoppingItem;
