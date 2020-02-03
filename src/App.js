import React, { useState } from 'react';
import Quiz from './components/Quiz';

function App() {
  const [start, setStart] = useState(false);

  const startQuiz = () => {
    setStart(true);
  }
  
  return (
    <div className="App">
      { start ?
        <Quiz start={start} startQuiz={startQuiz}/> :
       <div className="landing">
          <h1>Spanish Quiz</h1>
          <h2>Welcome to the Spanish Quiz! Ready to start? Click the button below!</h2>
          <button onClick={startQuiz} className="start-btn">Start Quiz</button>
        </div>
      }
    </div>
  );
}

export default App;
