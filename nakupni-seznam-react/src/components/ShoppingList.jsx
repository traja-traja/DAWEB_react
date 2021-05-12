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
    */

  return (
    <div className="seznam">
      <div className="seznam__polozky">
        {/* <ShoppingItem nazev="máslo" mnozstvi={1}></ShoppingItem> */}

        {/* <ShoppingItem
              nazev={props.nakup[1].nazev}
              mnozstvi={props.nakup[1].mnozstvi}
            ></ShoppingItem> */}

        {props.nakup.map((item) => (
          <ShoppingItem
            key={item.nazev}
            nazev={item.nazev}
            mnozstvi={item.mnozstvi}
          ></ShoppingItem>
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
