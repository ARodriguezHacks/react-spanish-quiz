import React from 'react';

const NextButton = (props) => {
  console.log(props.currentQuestion);
  return (
    <div>
      { props.quizSession ? 
          props.currentQuestion !== props.qData ? (
            <button onClick={props.next} className="next-btn">
              Next
            </button>
          ) : (
            <button onClick={props.finish} className="finish-btn">
              Finish
            </button>
          ) : null
      }
    </div>
  );
}
 
export default NextButton;