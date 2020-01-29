import React from 'react';

const RestartButton = (props) => {
  return (
    <div>
      <button onClick={props.reset}>Restart</button>
    </div>
  );
}
 
export default RestartButton;