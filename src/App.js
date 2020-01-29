import React, { useState } from 'react';
import Quiz from './components/Quiz';
//import ProgressBar from './components/ProgressBar';
//import NextButton from './components/NextButton';
//import questionData from './questionData';

function App() {
  //const [question, setQuestion] = useState(0);
  const [start, setStart] = useState(false);

  // const next = () => {
  //   if (question < questionData.length) {
  //     setQuestion(question + 1);
  //   }
  // }

  // useEffect( () => {
  //   console.log(`Question ${question}`);
  // });

  const startQuiz = () => {
    setStart(true);
    //setQuestion(question + 1);
  }

  // const finish = () => {
  //   setStart(false);
  // }

  // const reset = () => {
  //   setQuestion(0);
  //   setStart(true);
  // }
  
  return (
    <div className="App">
      { start ?
        <Quiz start={start} startQuiz={startQuiz}/> :
       <div>
          <h2>Welcome to the Spanish Quiz! Ready to start? Click the button below!</h2>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      }
    </div>
  );
}

export default App;
