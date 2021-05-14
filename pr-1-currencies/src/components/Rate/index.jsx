import React, { useState, useEffect } from 'react';
import './style.css';

const Rate = (props) => {
  const [rateValue, setRateValue] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.frankfurter.app/latest?from=${props.currency}&to=CZK`
    ).then(response => {
      return response.json();
    }).then (data => {
      setRateValue(data.rates.CZK);
    });

    return () => setRateValue(null);
  }, [props.currency]);

  if (rateValue === null) {
    return <div className="rate">Nahrávám data...</div>
  }

  return (
    <div className="rate">
      <div className="rate__currency">1 {props.currency}</div>
      <div>=</div>
      <div className="rate__value">{rateValue} CZK</div>
    </div>
  );
};

export default Rate;
