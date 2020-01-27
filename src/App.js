import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import ProgressBar from './components/ProgressBar';
import NextButton from './components/NextButton';
import questionData from './questionData';

function App() {
  const [question, setQuestion] = useState(0);
  const [start, setStart] = useState(true);

  const next = () => {
    if (question < questionData.length) {
      setQuestion(question + 1);
    }
  }

  useEffect( () => {
    console.log(`Question ${question}`);
  });

  const finish = () => {
    setStart(false);
  }

  const reset = () => {
    setQuestion(0);
    setStart(true);
  }
  
  return (
    <div className="App">
      <ProgressBar question={question} qData={questionData.length}/>
      <Question question={question} start={start} finish={finish}/>
      <NextButton next={next} start={start} finish={finish} reset={reset} question={question} qData={questionData.length}/>
    </div>
  );
}

export default App;
