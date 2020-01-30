import React from 'react';
import Answer from './Answer';
//import NextButton from './NextButton';

const Answers = (props) => {
  const currentQuestion = props.qData.find(obj => obj.id === props.question);
  //const correctAnswer = currentQuestion.correct_answer;
  
  // const [selected, setSelected] = useState('');

  // const updateSelect = () => {
  //   setSelected(true);
  // }

  return (
    <div>
      <Answer letter="a" answer={currentQuestion.answer_a}/>
      <Answer letter="b" answer={currentQuestion.answer_b} />
      <Answer letter="c" answer={currentQuestion.answer_c} />
      <Answer letter="d" answer={currentQuestion.answer_d}/>
    </div>
  );
}
 
export default Answers;