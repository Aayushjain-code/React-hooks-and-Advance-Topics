import React from 'react';

const ErrorExample = () => {


  let title = 'random title';
  const handleClick = () => {
    title = "hello people";
    console.log(title);

  };
  return (<div>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Click Me</button>
  </div>

  );
};

export default ErrorExample;



///here problem is that we are not re-rendering the title
//when we see it in console log its seen but its not changing the display
//here useState hook comes into play
