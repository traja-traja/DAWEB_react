import React, { useState } from "react";
import { render } from "react-dom";
import "./style.css";

import { Candidate } from "./components/Candidate";

const App = () => {
  const handleVote = (jmeno) => {
    console.log("rodič - zahlasováno pro: " + jmeno);
    setVoted(true);
  };

  const [voted, setVoted] = useState(false);
  const [hlasovano, setHlasovano] = useState(false);

  return (
    <>
      <header>
        <h1>Prezidentské volby</h1>
      </header>
      <main>
        <h2>Kandidáti</h2>

        {voted ? "Zahlasováno" : "Hlasuj v prezidentské volbě"}

        <div className="candidate-list">

          <Candidate
            onVote={handleVote}
            zahlasovano={voted}
            jmeno="Pampeliška Jahodová"
          ></Candidate>
          <Candidate
            onVote={handleVote}
            zahlasovano={voted}
            jmeno="Sněhurka"
          ></Candidate>
          <Candidate
            onVote={handleVote}
            zahlasovano={voted}
            jmeno="Aleš Růžička"
          ></Candidate>
          <Candidate
            onVote={handleVote}
            zahlasovano={voted}
            jmeno="Standa Kosáček"
          ></Candidate>
        </div>

        <div className="custom-candidate">
          <form>
            <label>
              Zvol si svého kandidáta:
              <input />
            </label>
            <button type="submit">Hlasuj</button>
          </form>
        </div>
      </main>
    </>
  );
};

render(<App />, document.querySelector("#app"));
