import React, { useState, useEffect } from 'react';

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
      return;
    }

    const timerId = setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      {question.answers.map((answer, index) => (
        <button key={index} onClick={() => onAnswered(true)}>
          {answer}
        </button>
      ))}
      <h5>{timeRemaining} seconds remaining</h5>
    </div>
  );
}

export default Question;