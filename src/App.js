import React, { useState } from 'react';
import Quiz from './components/Quiz';
import cactusLogo from './assets/icons8-cactus-100.png';

function App() {
  const [start, setStart] = useState(false);

  const startQuiz = () => {
    setStart(true);
  }
  
  return (
    <div className="App">
      { start ?
        <Quiz start={start} startQuiz={startQuiz}/> :
        <>
          <div className="landing">
            <h1>SpeedySpanish Quiz</h1>
            <h2>
              Welcome to SpeedySpanish Quiz! A fun and quick way to learn Spanish.
              <br/>
              <br/>
              Ready to start? Click the button below!
            </h2>
            <button onClick={startQuiz} className="start-btn">Start Quiz</button>
          </div>
          <img src={cactusLogo} className="cactus-icon" alt="Cactus icon"/>
        </>
      }
    </div>
  );
}

export default App;
