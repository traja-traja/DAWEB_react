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

      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
