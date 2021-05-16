import React, { useState } from 'react';
import QuestionBody from '../QuestionBody/index';
import Option from '../Option/index';
import './style.css';

const Question = (props) => {
  const [answer, setAnswer] = useState('symbolQuestion');
  
  const handleSelect = (iconType) => {
    console.log(iconType);
    console.log('selected answer');
    setAnswer(iconType);

  };

  return (
    <div className="question">
      <QuestionBody 
        iconType={answer}
        text="Kdo jinému jámu kopá, sám do ní padá"
      />
      <div className="question__options">
        <Option onSelect={handleSelect} type="smileyStrongYes" text="Souhlasím"/>
        <Option onSelect={handleSelect} type="smileyYes" text="Spíše souhlasím"/>
        <Option onSelect={handleSelect} type="smileyNeutral" text="Nevím"/>
        <Option onSelect={handleSelect} type="smileyNo" text="Spíše nesouhlasím"/>
        <Option onSelect={handleSelect} type="smileyStrongNo" text="Nesouhlasím"/>
      </div>
    </div>
  );
};

export default Question;