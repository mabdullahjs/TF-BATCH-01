import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [counter , setCounter] = useState(10);
  const [ternary , setTernary] = useState(false);
  const [emails , setEmail] = useState('');
  const [passwords , setPassword] = useState('');
  const email = useRef();
  const password = useRef();

  function addCounter (event){
    event.preventDefault();
    setCounter(counter + 1);
    console.log(email.current.value);
    console.log(password.current.value);
    setEmail(email.current.value)
    setPassword(password.current.value)
    email.current.value = ''
    password.current.value = ''
  }


  function updateState(){
    setTernary(ternary === true ? false : true)
  }


  return (
    <>
      <h1 className='text-center text-7xl mt-5'>Hello world {counter}</h1>
      {/* <p>{counter}</p>

      <button className='px-6 py-2 rounded bg-blue-300' onClick={addCounter}>Add {counter}</button> */}

      <h1 className='m-5 text-7xl'> {ternary ? 'true haa' : 'false haa'}</h1>

      <button className='px-6 py-2 rounded bg-blue-300' onClick={updateState}>Add {counter}</button>
      <form onSubmit={addCounter}>
        <input type="email" className='border-2 border-solid border-black' ref={email}/> <br /><br />
        <input type="password" className='border-2 border-solid border-black' ref={password} /><br /><br />
        <input type="submit" value="Login" className='px-6 py-2 rounded bg-blue-300' />
      </form>

      <div>
        <h1>{emails}</h1>
        <h1>{passwords}</h1>
      </div>

      <Card head='hello abc from prop' para='para from prop' counter={counter}/>
      <Card head='hello' para='para' counter={counter}/>
      <Card head=' prop' para='para prop' counter={counter}/>


    </>
  )
}

export default App