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
  console.log(props.selected, props.correctAnswer);

  return (
    <button value={props.letter} onClick={props.handleClick} className={classes.join('-')}>
      <span className="letter">{props.letter}.</span> {props.answer}
    </button>
  );
}
 
export default Answer;