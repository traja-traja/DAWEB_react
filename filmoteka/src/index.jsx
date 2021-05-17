import React from 'react';
import { render } from 'react-dom';
import { MainNav } from './MainNav';
import './style.css';

const App = () => (
  <div className="container">
    <header>
      <h1>Filmotéka</h1>
      <MainNav></MainNav>
    </header>
    <main>
      Kontejner domů
    </main>
  </div>
);

render(<App />, document.querySelector('#app'));
