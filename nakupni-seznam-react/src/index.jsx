import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";

import ShoppingList from "./components/ShoppingList";
import NewShoppingItem from "./components/NewShoppingItem";
import FilterShoppingList from "./components/FilterShoppingList";

const App = () => {
  const [nakup, setNakup] = useState([
    { nazev: "máslo", mnozstvi: 1 },
    { nazev: "sýr", mnozstvi: 2 },
    { nazev: "banány", mnozstvi: 8 },
    { nazev: "chleba", mnozstvi: 1 },
    { nazev: "pivo", mnozstvi: 1 },
  ]);

  const [skrytKoupene, setSkrytKoupene] = useState(false);

  const handleFormSubmit = (data) => {
    // nakup.push(data); // nebude fungovat
    setNakup((prevState) => {
      return prevState.concat(data); // array1.concat(array2) spojí obě pole a jako 'return' vrátí nové pole
    });
  };

  const handleFilterChange = (filterHidden) => {
    setSkrytKoupene(filterHidden)
  };

  return (
    <div>
      <header>
        <h1>Nákupní seznam</h1>
        <FilterShoppingList onFilterChange={handleFilterChange} />
      </header>
      <main>
        <ShoppingList
          nakup={nakup}
          skrytKoupene={skrytKoupene}
        />
        <div>
          <h2>Přidat položku</h2>
          <NewShoppingItem onFormSubmit={handleFormSubmit} />
        </div>
      </main>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
