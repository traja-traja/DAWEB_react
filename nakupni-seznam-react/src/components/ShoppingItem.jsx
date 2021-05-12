import React, { useState } from "react";
import "./ShoppingItem.css";

const ShoppingItem = (props) => {
  const [koupeno, setKoupeno] = useState(false);

  const handleClick = () => {
    setKoupeno((prevState) => !prevState);
  };

  return (
    <div
      className={koupeno ? "polozka polozka--koupeno" : "polozka"}
      onClick={handleClick}
    >
      <div className="polozka__nazev">{props.nazev}</div>
      <div className="polozka__mnozstvi">{props.mnozstvi} ks</div>
    </div>
  );
};

export default ShoppingItem;