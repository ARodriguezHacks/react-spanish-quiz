import React from 'react';
import Answer from './Answer';

const Answers = (props) => {
  //const correctAnswer = props.currentQuestion.correct_answer;
  //console.log(correctAnswer);
  
  return (
    <div className="container">
      <div className="column">
        <Answer 
          letter="a" 
          answer={props.currentQuestion.answer_a} 
          correctAnswer={props.correctAnswer}
          showCorrectAnswer={props.showCorrectAnswer}
          handleClick={props.handleClick}
          disableClick={props.disableClick}
          selected={props.currentAnswer === 'a'}
        />
        <Answer 
          letter="b" 
          answer={props.currentQuestion.answer_b} 
          correctAnswer={props.correctAnswer}
          showCorrectAnswer={props.showCorrectAnswer}
          handleClick={props.handleClick}
          disableClick={props.disableClick}
          selected={props.currentAnswer === 'b'}
        />
      </div>
      <div className="column">
        <Answer 
          letter="c" 
          answer={props.currentQuestion.answer_c} 
          correctAnswer={props.correctAnswer}
          showCorrectAnswer={props.showCorrectAnswer}
          handleClick={props.handleClick}
          disableClick={props.disableClick}
          selected={props.currentAnswer === 'c'}
        />
        <Answer 
          letter="d" 
          answer={props.currentQuestion.answer_d} 
          correctAnswer={props.correctAnswer}
          showCorrectAnswer={props.showCorrectAnswer}
          handleClick={props.handleClick}
          disableClick={props.disableClick}
          selected={props.currentAnswer === 'd'}
        />
      </div>
    </div>
  );
}
 
export default Answers;