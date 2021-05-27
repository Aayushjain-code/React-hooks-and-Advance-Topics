import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter',
    age: '24',
    message: 'random Message'
  });

  console.log(person);
  const ChangeMessage = () => {
    setPerson({ ...person, message: 'hello' })
  }
  return <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className="btn" onClick={ChangeMessage}>ChangeMessage</button>
  </>;
};

export default UseStateObject;
