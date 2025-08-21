import React, { useState } from 'react';
import './Quiz.css';
import { data } from '../../assets/Data';

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = data[index];

  const handleNext = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
      setSelected(null); 
    } 
    else {
      setShowResult(true); 
    }
  };

  const checkAns = (ans) => {
    if (!selected) {
      setSelected(ans);
      if (ans === question.ans) {
        setScore(score + 1);
      }
    }
  };

  if (showResult) {
    return (
      <div className="container">
        <h1>Secrets of Discord Gang</h1>
        <hr />
        <h2>Your Score: {score} / {data.length}</h2>
        <button onClick={() => { setIndex(0); setScore(0); setSelected(null); setShowResult(false); }}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Secrets of Discord Gang</h1>
      <hr />
      <h2>{index + 1}. {question.question}</h2>
        <ul>
          <li onClick={() => checkAns(1)} className={ selected ? question.ans === 1 ? "correct" : selected === 1 ? "wrong" : "" : "" }>{question.option1}</li>
          <li onClick={() => checkAns(2)} className={ selected ? question.ans === 2 ? "correct" : selected === 2 ? "wrong" : "" : "" }>{question.option2}</li>
          <li onClick={() => checkAns(3)} className={ selected ? question.ans === 3 ? "correct" : selected === 3 ? "wrong" : "" : "" }>{question.option3}</li>
          <li onClick={() => checkAns(4)} className={ selected ? question.ans === 4 ? "correct" : selected === 4 ? "wrong" : "" : "" }>{question.option4}</li>
        </ul>
      <button onClick={handleNext} disabled={!selected}>NEXT</button>
      <div className='index'>
        {index + 1} of {data.length} Questions
      </div>
    </div>
  );
};

export default Quiz;
