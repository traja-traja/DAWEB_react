import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import './index.html';

const MenuItem = (props) => {
  const handleClick = () => {
    props.onSelect(props.text);
  };
  
  return (
    <a href="#" className="menu-item" onClick={handleClick}>
      {props.text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');
  
  const handleMenuClick = () => {
    setMenuOpened((prevState) => !prevState);
  };

  const handleSelectItem = (text) => {
    setPageTitle(text);
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
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
