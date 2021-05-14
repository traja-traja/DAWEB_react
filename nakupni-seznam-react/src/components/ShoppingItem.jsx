import React, { useState } from "react";
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  const handleClick = () => {
    props.onBoughtChange(props.nazev);
  };

  const handlePlusClick = (event) => {
    event.stopPropagation();
    props.onAddItemAmount(props.nazev, 1);
  };

  const handleMinusClick = (event) => {
    event.stopPropagation();
    props.onAddItemAmount(props.nazev, -1);
  };

  return (
    <div
      className={props.koupeno ? "polozka polozka--koupeno" : "polozka"}
      onClick={handleClick}
    >
      <div className="polozka__nazev">{props.nazev}</div>
      <button className="polozka__button" onClick={handlePlusClick}>+</button>
      <div className="polozka__mnozstvi">{props.mnozstvi} ks</div>
      <button className="polozka__button" onClick={handleMinusClick}>-</button>
    </div>
  );
};

export default ShoppingItem;
