import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import './index.html';

const MenuItem = (props) => {
  return (
    <a href="#" className="menu-item" onClick={props.onSelect}>
      {props.text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  
  const handleMenuClick = () => {
    setMenuOpened((prevState) => !prevState);
  };

  const handleSelectItem = () => {
    setMenuOpened(false);
  }

  return (
    <>
      <header>
        <div className={`menu ${menuOpened ? '' : 'menu--closed'}`}>
          <button className="menu__btn" onClick={handleMenuClick}></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectItem} text="Domů" />
            <MenuItem onSelect={handleSelectItem} text="Naše nabídka" />
            <MenuItem onSelect={handleSelectItem} text="Náš tým" />
            <MenuItem onSelect={handleSelectItem} text="Blog" />
            <MenuItem onSelect={handleSelectItem} text="Kontakt" />
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
