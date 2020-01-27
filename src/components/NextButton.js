import React from 'react';

const NextButton = (props) => {
  return (
    <div>
      {props.start ? (
         props.question !== props.qData ? (
            <button onClick={props.next}>
              Next
            </button>
          ) : (
            <button onClick={props.finish}>
              Finish
            </button>
          )
        ) :
          <button onClick={props.reset}>
            Reset
          </button>
      }
    </div>
  );
}
 
export default NextButton;