import React from 'react';
import './style.css';

const Candidate = (props) => (
  <div className="candidate">
    <h3 className="candidate__name">{props.name}</h3>
    <img className="candidate__avatar" src={props.avatar} />
    <button className="btn-vote">Vybrat</button>
  </div>
);

export default Candidate;