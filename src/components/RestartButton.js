import React from 'react';

const RestartButton = (props) => {
  return (
    <div className="restart-div">
      <button onClick={props.reset} className="restart-btn">Retake Quiz</button>
    </div>
  );
}
 
export default RestartButton;