import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";

import ShoppingList from "./components/ShoppingList";
import NewShoppingItem from "./components/NewShoppingItem";
import FilterShoppingList from "./components/FilterShoppingList";

const DUMMY_DATA = [
  { nazev: "máslo", mnozstvi: 1, koupeno: false },
  { nazev: "sýr", mnozstvi: 2, koupeno: false },
  { nazev: "banány", mnozstvi: 8, koupeno: false },
  { nazev: "chleba", mnozstvi: 1, koupeno: false },
  { nazev: "pivo", mnozstvi: 1, koupeno: false },
];

const App = () => {
  const [nakup, setNakup] = useState(DUMMY_DATA);

  const [skrytKoupene, setSkrytKoupene] = useState(true); // defaultní stav true

  // @todo handlenewItemAdded ... rename
  const handleFormSubmit = (data) => {
    // nakup.push(data); // nebude fungovat
    setNakup((prevState) => {
      return prevState.concat({
        ...data,
        mnozstvi: Number(data.mnozstvi)
      });
      // array1.concat(array2) spojí obě pole a jako 'return' vrátí nové pole
      // return [...prevState, data]; // druhá varianta
    });
  };

  const handleBoughtChange = (id) => {
    console.log('nova polozka');
    setNakup((prevState) => {
      return (
        prevState.map(polozka => {
          if (id === polozka.nazev) {
            polozka.koupeno = !polozka.koupeno;
          }
          return polozka;
        })
      );
    });
  }

  const handleFilterChange = (filterHidden) => {
    setSkrytKoupene(filterHidden)
  };

  const handleAddItemAmount = (id, amount) => {
    console.log('zmena mnozstvi');
    setNakup((prevState) => {
      return (
        prevState.map(polozka => {
          if (id === polozka.nazev) {
            polozka.mnozstvi += amount;
          }
          return polozka;
        })
      );
    });
  };

  return (
    <div>
      <header>
        <h1>Nákupní seznam</h1>
        <FilterShoppingList
          filterIsChecked={skrytKoupene}
          onFilterChange={handleFilterChange}
        />
      </header>
      <main>
        <ShoppingList
          nakup={nakup}
          skrytKoupene={skrytKoupene}
          onBoughtChange={handleBoughtChange}
          onAddItemAmount={handleAddItemAmount}
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
