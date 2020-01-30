import React, { useState } from 'react';

const Answer = (props) => {
  const [currentAnswer, setCurrentAnswer] = useState('');

  // handleClick() => {
  //   console.log()
  // }
  
  return (
    <button>
      {props.answer}
    </button>
  );
}
 
export default Answer;