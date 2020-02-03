import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import NextButton from './NextButton';
import RestartButton from './RestartButton';
import Answers from './Answers';
import questionData from './../questionData';

const Quiz = (props) => {
  const [question, setQuestion] = useState(1);
  const [quizSession, setQuizSession] = useState(true);
  const [currentAnswer, setCurrentAnswer] = useState('');

  console.log(questionData);
  // useEffect( () => {
  //   console.log(`Question ${question}`);
  // });

  const next = () => {
    if (question < questionData.length) {
      setQuestion(question + 1);
    }
  }

  const finish = () => {
    setQuizSession(false);
  }

  const reset = () => {
    setQuestion(1);
    setQuizSession(true);
  }

  const handleClick = e => {
    setCurrentAnswer(e.target.value);
  };

  return (
    <div>
      { quizSession ?
      <div>
        <ProgressBar question={question} qData={questionData.length}/>
        <Question
          question={question} 
          start={props.start}
          finish={finish}
          startQuiz={props.startQuiz}
          qData={questionData}
          quizSession={quizSession} />
        <Answers 
          question={question}
          qData={questionData}
          quizSession={quizSession} 
          currentAnswer={currentAnswer}
          handleClick={handleClick}/>
        <NextButton
          next={next} 
          start={props.start} 
          finish={finish} 
          reset={reset} 
          question={question} 
          qData={questionData.length}
          quizSession={quizSession}
        />
      </div> :
       (
        <div>
          <h2>Way to complete the quiz!</h2>
          <RestartButton reset={reset}/>
        </div>
      )
      }
    </div>
  );
}
 
export default Quiz;