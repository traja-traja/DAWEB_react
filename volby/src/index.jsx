import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Candidate from './Candidate/index';
import './style.css';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(() => setCandidates([
    { name: "Pampeliška Jahodová", avatar: '/assets/candidate03.png' },
    { name: "Sněhurka", avatar: '/assets/candidate02.png' },
    { name: "Standa Kosáček", avatar: '/assets/candidate01.png' },
    { name: "Aleš Růžička", avatar: '/assets/candidate04.png' },
  ]), []);
  
  return (
    <div className="container">
      <div className="castle">
        <div className="castle__image"></div>
        <div className="castle__body">
          <h1>Nový prezident</h1>
          <p className="castle__president">
            {
              president === null ? 'Vyberte svého kandidáta' : president
            }
          </p>
        </div>
      </div>
      
      <h2>Kandidáti</h2>
      <div className="candidate-list">
        {candidates.map(
          (c) => <Candidate name={c.name} avatar={c.avatar} />
        )}
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));
