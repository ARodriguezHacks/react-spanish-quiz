import React, {useState} from 'react';
import Answer from './Answer';
//import NextButton from './NextButton';

const Answers = (props) => {
  const currentQuestion = props.qData.find(obj => obj.id === props.question);
  const correctAnswer = currentQuestion.correct_answer;
  
  // const [selected, setSelected] = useState('');

  // const updateSelect = () => {
  //   setSelected(true);
  // }

  return (
    <div>
      <Answer 
        letter="a" 
        answer={currentQuestion.answer_a} 
        correctAnswer={correctAnswer} 
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'a'}
      />
      <Answer 
        letter="b" 
        answer={currentQuestion.answer_b} 
        correctAnswer={correctAnswer}
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'b'}
      />
      <Answer 
        letter="c" 
        answer={currentQuestion.answer_c} 
        correctAnswer={correctAnswer}
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'c'}
      />
      <Answer 
        letter="d" 
        answer={currentQuestion.answer_d} 
        correctAnswer={correctAnswer}
        handleClick={props.handleClick}
        selected={props.currentAnswer === 'd'}
      />
    </div>
  );
}
 
export default Answers;