import React from 'react';
import questionData from './../questionData';

const Question = (props) => {

  const currentQuestion = questionData.find( (obj) => obj.id === props.question);
  console.log(currentQuestion);
   return (
     <div>
        <h1>{currentQuestion.question}</h1>
     </div>
   )
}
 
export default Question;