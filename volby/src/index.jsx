import React from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {  
  return (
    <>
      <header>
        <h1>Prezidentské volby</h1>
      </header>
      <main>
        <h2>Kandidáti</h2>
        <div className="candidate-list">
          <button>Ferdinand Mravenec</button>
          <button>Markéta Smetana</button>
          <button>Beáta Skočdopolová</button>
          <button>Lubomír Poňuchálek</button>
        </div>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
