import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Nákupní seznam</h1>
      </header>
      <main>

        <div className="seznam">
          <div className="seznam__polozky">
            <div className="polozka">
              <div className="polozka__nazev">máslo</div>
              <div className="polozka__mnozstvi">1 ks</div>
            </div>
            <div className="polozka">
              <div className="polozka__nazev">sýr</div>
              <div className="polozka__mnozstvi">2 ks</div>
            </div>
            <div className="polozka">
              <div className="polozka__nazev">banány</div>
              <div className="polozka__mnozstvi">8 ks</div>
            </div>
            <div className="polozka">
              <div className="polozka__nazev">chleba</div>
              <div className="polozka__mnozstvi">1 ks</div>
            </div>
            <div className="polozka">
              <div className="polozka__nazev">pivo</div>
              <div className="polozka__mnozstvi">1 ks</div>
            </div>
          </div>
        </div>

        <div>
          <h2>Přidat položku</h2>
          <form className="formular">
            <input placeholder="název položky" className="formular__nazev-polozky" type="text" />
            <input placeholder="počet" className="formular__pocet-kusu" type="number" min="1" />
            <button className="formular__tlacitko">Přidat</button>
          </form>
        </div>

      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
