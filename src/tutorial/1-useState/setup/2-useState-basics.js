import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('Random title');

  const handleClick = () => {
    if (text == "Random title") {
      setText('hello world');
    } else {
      setText('Random title');
    }

  };
  return <React.Fragment>
    <h1>
      {text}
    </h1>
    <button className="btn" onClick={handleClick}>change title</button>
  </React.Fragment>;
};

export default UseStateBasics;
