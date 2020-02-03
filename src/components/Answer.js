import React from 'react';

const Answer = (props) => {
  let classes = ['answer'];

  if (props.selected) {
    classes.push('selected');
  }
  // const [currentAnswer, setCurrentAnswer] = useState('');

  // const handleClick = () => {
  //   console.log(props.answer);
  // };
  //console.log(currentAnswer);
  return (
    <button value={props.letter} className={classes.join('-')} onClick={props.handleClick}>
      <span className="letter">{props.letter}.</span> {props.answer}
    </button>
  );
}
 
export default Answer;