import React, {useState} from 'react';
import ProgressBar from './ProgressBar';
import Question from './Question';
import NextButton from './NextButton';
import RestartButton from './RestartButton';
import Answers from './Answers';
import questionData from './../questionData';

const Quiz = (props) => {
  const [question, setQuestion] = useState(0);
  const [quizSession, setQuizSession] = useState(true);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');

  const currentQuestion = questionData[question];

  const next = () => {
    const answer = {questionId: currentQuestion.id, answer: currentAnswer};
    console.log(answers);
    if (!currentAnswer) {
      setError('Please select an option');
      return;
    }

    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');

    if (question + 1 < questionData.length) {
      setQuestion(question + 1);
      return;
    }
  };

  const finish = () => {
    setQuizSession(false);
  };

  const reset = () => {
    setQuestion(0);
    setCurrentAnswer('');
    setAnswers([]);
    setQuizSession(true);
  };

  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    setError('');
  };

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>
  };

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span>Correct</span>;
    }
    return <span>Failed</span>;
  }

  const renderResultsData = () => {
    return answers.map( answer => {
      const question = questionData.find( 
        question => question.id === answer.questionId
        );

        return (
          <div key={question.id}>
            {question.question} - {renderResultMark(question, answer)}
          </div>
        )
    });
  };

  return (
    <div>
      { quizSession ?
      <div>
        <ProgressBar currentQuestion={question + 1} qData={questionData.length}/>
        <Question
          currentQuestion={currentQuestion.question} 
          startQuiz={props.startQuiz}
        />
        {renderError()}
        <Answers
          currentQuestion={currentQuestion}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <NextButton
          next={next} 
          finish={finish}  
          currentQuestion={question + 1} 
          qData={questionData.length}
          quizSession={quizSession}
        />
      </div> :
       (
        <div>
          <h2>Way to complete the quiz!</h2>
          <h3>Quiz Results</h3>
          <ul>
            {renderResultsData()}
          </ul>
          <RestartButton reset={reset}/>
        </div>
      )
      }
    </div>
  );
}
 
export default Quiz;