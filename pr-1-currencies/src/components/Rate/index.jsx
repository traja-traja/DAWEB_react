import React from 'react';
import './style.css';

const Rate = (props) => {
  return (
    <div className="rate">
      <div className="rate__currency">1 {props.currency}</div>
      <div>=</div>
      <div className="rate__value">22 CZK</div>
    </div>
  );
};

export default Rate;
