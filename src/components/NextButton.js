import React from 'react';

const NextButton = (props) => {
  console.log(props.currentQuestion);
  return (
    <div>
      { props.quizSession ? 
          props.currentQuestion !== props.qData ? (
            <button onClick={props.next}>
              Next
            </button>
          ) : (
            <button onClick={props.finish}>
              Finish
            </button>
          ) : null
      }
    </div>
  );
}
 
export default NextButton;