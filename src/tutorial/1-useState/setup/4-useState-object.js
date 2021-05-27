import React, { useState } from 'react';

const UseStateObject = () => {

  const [person, setPerson] = useState({
    name: 'peter',
    age: '24',
    message: 'random Message'
  });

  const [name, setname] = useState('peter')
  const [age, setage] = useState('24')
  const [message, setmessage] = useState('random Message')

  const ChangeMessage = () => {
    // setPerson({ ...person, message: 'hello' });
    setname('aayu');
    setage('22')
    setmessage("i am awesome")
  }
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className="btn" onClick={ChangeMessage}>ChangeMessage</button>
  </>;
};

export default UseStateObject;
