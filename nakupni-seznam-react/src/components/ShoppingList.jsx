import React from "react";
import "./ShoppingList.css";

import ShoppingItem from "./ShoppingItem";

const ShoppingList = (props) => {
  /*
    props.nakup = [
        { nazev: "máslo", mnozstvi: 1 },
        { nazev: "sýr", mnozstvi: 2 }
        .......
    ]
    props.skrytKoupene = false (true)
    props.onShoppingItemChange = function ...
    */

  const filteredNakup = props.skrytKoupene
    ? props.nakup.filter((polozka) => !polozka.koupeno)
    : [...props.nakup];

  let listOfShoppingItems = <p>Žádné položky</p>;

  if (filteredNakup.length > 0) {
    listOfShoppingItems = filteredNakup.map((item) => (
      <ShoppingItem
        key={item.nazev}
        nazev={item.nazev}
        mnozstvi={item.mnozstvi}
        koupeno={item.koupeno}
        onBoughtChange={props.onBoughtChange}
        onAddItemAmount={props.onAddItemAmount}
      ></ShoppingItem>
    ));
  }

  return (
    <div className="seznam">
      <div className="seznam__polozky">
        {listOfShoppingItems}
      </div>
    </div>
  );
};

export default ShoppingList;
