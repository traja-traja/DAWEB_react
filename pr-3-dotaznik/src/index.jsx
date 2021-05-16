import React from 'react';
import { render } from 'react-dom';
import Question from './Question/index';
import './style.css';

const App = () => (
  <div className="container">
    <Question text="Kdo jinému jámu kopá, sám do ní padá." />
  </div>
);

render(<App />, document.querySelector('#app'));
