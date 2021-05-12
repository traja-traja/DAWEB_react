import React from "react";
import { render } from "react-dom";
import "./style.css";

import ShoppingList from './components/ShoppingList';

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
          <form className="formular">
            <input
              placeholder="název položky"
              className="formular__nazev-polozky"
              type="text"
            />
            <input
              placeholder="počet"
              className="formular__pocet-kusu"
              type="number"
              min="1"
            />
            <button className="formular__tlacitko">Přidat</button>
          </form>
        </div>
      </main>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
