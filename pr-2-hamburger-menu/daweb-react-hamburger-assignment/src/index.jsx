import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import './index.html';

const MenuItem = (props) => {
  return (
    <a href="#" className="menu-item">
      {props.text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  
  const handleMenuClick = () => {
    setMenuOpened((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className={`menu ${menuOpened ? '' : 'menu--closed'}`}>
          <button className="menu__btn" onClick={handleMenuClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" />
            <MenuItem text="Naše nabídka" />
            <MenuItem text="Náš tým" />
            <MenuItem text="Blog" />
            <MenuItem text="Kontakt" />
          </div>
        </div>
      </header>
      <main>
        <h1>Domů</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
