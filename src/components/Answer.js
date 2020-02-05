import React from 'react';

const Answer = (props) => {
  let classes = ['answer'];
  //console.log(props.selected);
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
      classes.push('selected');
    }
  }
  
  return (
    <button 
      value={props.letter}
      onClick={ !props.disableClick ? props.handleClick : null} 
      className={classes.join('-')}
    >
      <span className="letter">{props.letter}.</span> {props.answer}
    </button>
  );
}
 
export default Answer;