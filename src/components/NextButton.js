import React from 'react';

const NextButton = (props) => {
  return (
    <div>
      { props.quizSession ? 
          props.question !== props.qData ? (
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