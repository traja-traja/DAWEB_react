import React from "react";
import { render } from "react-dom";
import "./style.css";

import ShoppingList from './components/ShoppingList';
import NewShoppingItem from "./components/NewShoppingItem";

const App = () => {
  const nakup = [
    { nazev: "máslo", mnozstvi: 1 },
    { nazev: "sýr", mnozstvi: 2 },
    { nazev: "banány", mnozstvi: 8 },
    { nazev: "chleba", mnozstvi: 1 },
    { nazev: "pivo", mnozstvi: 1 },
  ];

  return (
    <div>
      <header>
        <h1>Nákupní seznam</h1>
      </header>
      <main>
        
        <ShoppingList nakup={nakup}></ShoppingList>

        <div>
          <h2>Přidat položku</h2>
          <NewShoppingItem />
        </div>
      </main>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
