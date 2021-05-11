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
      <div class="seznam">
        <div class="seznam__polozky">
          <div class="polozka">
            <div class="polozka__nazev">máslo</div>
            <div class="polozka__mnozstvi">1 ks</div>
          </div>
          <div class="polozka">
            <div class="polozka__nazev">sýr</div>
            <div class="polozka__mnozstvi">2 ks</div>
          </div>
          <div class="polozka">
            <div class="polozka__nazev">banány</div>
            <div class="polozka__mnozstvi">8 ks</div>
          </div>
          <div class="polozka">
            <div class="polozka__nazev">chleba</div>
            <div class="polozka__mnozstvi">1 ks</div>
          </div>
          <div class="polozka">
            <div class="polozka__nazev">pivo</div>
            <div class="polozka__mnozstvi">1 ks</div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
