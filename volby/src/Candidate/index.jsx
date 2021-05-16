import React from "react";
import "./style.css";

/* 
  Tato komponenta (Candidate) je dítě rodiče App.js
  Na rodiči byl definovaný atribut onVoted, proto ho zde v dítěti mám k dispozici v props.onVoted
  A props.onVoted obsahuje funkci, kterou zde v dítěti mohu zavolat, a dokonce mohu předat parametr, který funkce očekává
  Předávám jméno kandidátu (props.name)

*/

const Candidate = (props) => {
  const handleClick = () => {
    console.log("Kliknuto v Candidate na kandidáta: " + props.name);
    props.onVoted(props.name);
  };

  return (
    <div className="candidate">
      <h3 className="candidate__name">{props.name}</h3>
      <img className="candidate__avatar" src={props.avatar} />
      <button className="btn-vote" onClick={handleClick}>
        Vybrat
      </button>
    </div>
  );
};

export default Candidate;
