import React, {useState, useEffect} from 'react';
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
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');
  const [disableClick, setDisableClick] = useState(false);

  const currentQuestion = questionData[question];
  const correctAnswer = questionData[question].correct_answer;

  const next = () => {
    setDisableClick(false);
    setShowCorrectAnswer(false);
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
    if (!currentAnswer) {
      setError('Please select and option');
      return;
    }
    setDisableClick(false);
    setQuizSession(false);
  };

  const reset = () => {
    setQuestion(0);
    setCurrentAnswer('');
    setAnswers([]);
    setQuizSession(true);
    setShowCorrectAnswer(false);
  };

  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    setDisableClick(true);
    setShowCorrectAnswer(true);
    setError('');
  };

  useEffect( () => {
    console.log(`You clicked ${currentAnswer}`);
  });

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>
  };

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct</span>;
    }
    return <span className="failed">Failed</span>;
  }

  const renderResultsData = () => {
    return answers.map( answer => {
      const question = questionData.find( 
        question => question.id === answer.questionId
        );

        return (
          <div key={question.id} className="result-item">
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
        <span className="render-error">{renderError()}</span>
        <Answers
          currentQuestion={currentQuestion}
          correctAnswer={correctAnswer}
          currentAnswer={currentAnswer}
          showCorrectAnswer={showCorrectAnswer}
          handleClick={handleClick}
          disableClick={disableClick}
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