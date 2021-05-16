import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Candidate from "./Candidate/index";
import { Castle } from "./Castle/index";
import "./style.css";

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(
    () =>
      setCandidates([
        { name: "Pampeliška Jahodová", avatar: "/assets/candidate03.png" },
        { name: "Sněhurka", avatar: "/assets/candidate02.png" },
        { name: "Standa Kosáček", avatar: "/assets/candidate01.png" },
        { name: "Aleš Růžička", avatar: "/assets/candidate04.png" },
      ]),
    []
  );

  /*

    P.S. Přejmenoval jsem onHlasovano na onVoted a handleHlasovano na handleVoted (zní přecejen lépe :)

    Vysvětlení této komponenty (App.js)
    - tato komponenta má 5 potomků: 1× Castle a 4× Candidate, viz JSX níže, které tato komponenta vrací
    - funkce handleVoted je definována zde v rodiči a k potomkům (kandidátům) ji předávám prostřednictví atributu 'onVoted'
    - názvy atributů u vlastních komponent (avatar="hodnota") si mohu zvolit libovolně, např. obrazekAvataru="hodnota" atd..
    - atributy, které obsahují funkci, je dobré pojmenovat onVoted, onSelect, onCokoliv... (konvence)

  */

  const handleVoted = (jmeno) => {
    console.log("Událost obsloužena v hlavní komponentě, hlasováno pro", jmeno);
    setPresident(jmeno);
  };

  return (
    <div className="container">
      <Castle novyPrezident={president}></Castle>

      <h2>Kandidáti</h2>
      <div className="candidate-list">
        {candidates.map((candidate) => (
          <Candidate
            key={candidate.name}
            onVoted={handleVoted}
            name={candidate.name}
            avatar={candidate.avatar}
          />
        ))}
      </div>
    </div>
  );
};

render(<App />, document.querySelector("#app"));
