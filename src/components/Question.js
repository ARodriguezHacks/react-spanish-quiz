import React from 'react';

const Question = (props) => {
  return (
    <div>
      <h1>{props.start ? 
          props.question : "Start Over"
      }</h1>
    </div>
  );
}
 
export default Question;