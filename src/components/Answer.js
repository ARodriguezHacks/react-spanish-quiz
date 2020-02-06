import React from 'react';

const Answer = (props) => {
  let classes = ['answer'];

  if (props.selected) {
    if (props.correctAnswer === props.letter) {
      classes.push('selected');
    }
    else {
      classes.push('wrong');
    }
  } 
  else if (props.showCorrectAnswer) {
    if (props.correctAnswer === props.letter) {
      classes.push('correct');
    }
    else {
      classes.push('not-selected');
    }
  }

  return (
    <div>
    <span className="letter">{props.letter}.</span>
    <button 
      value={props.letter}
      onClick={ !props.disableClick ? props.handleClick : null} 
      className={classes.join('-')}
    >
     {props.answer}
    </button>
    </div>
  );
}
 
export default Answer;