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
       <div>
          <h2>Welcome to the Spanish Quiz! Ready to start? Click the button below!</h2>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      }
    </div>
  );
}

export default App;
