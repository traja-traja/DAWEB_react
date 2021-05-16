import React from "react";
/* @todo
  1 vytvořit nový soubor style.css v této složce Castle (= styly pouze pro tuto komponentu)
  2 tedy zkopírovat správné styly ze /src/style.css do /src/Castle/style.css
  3 v tomto souboru přidat import stylů: import './style.css';
*/

export const Castle = (props) => {
  // console.log(props, 'Logujeme proměnné v dítěti, v Castle.jsx');

  return (
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>Nový prezident</h1>
        <p className="castle__president">
          Nový prezident:{" "}
          {props.novyPrezident ? props.novyPrezident : "Hlasujte"}
        </p>
      </div>
    </div>
  );
};
