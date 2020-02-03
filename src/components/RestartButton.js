import React from 'react';

const RestartButton = (props) => {
  return (
    <div>
      <button onClick={props.reset} className="restart-btn">Restart</button>
    </div>
  );
}
 
export default RestartButton;