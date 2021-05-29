import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello aayu';


  return <>
    {/* <h1>{firstValue}</h1>
    <h1>value: {secondValue}</h1> */}

    {/* <h1>{text || 'john doe'}</h1> */}
    {/* <h1>{text && 'john doe'}</h1> */}
    {!text && <h1>hello</h1>}

  </>

};

export default ShortCircuit;
