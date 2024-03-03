import axios from 'axios';
import React, { useRef, useState } from 'react'

const App = () => {
  const username = useRef();
  const [user , setUser] = useState(null);

  const getDetail = (event)=>{
    event.preventDefault();
    console.log(username.current.value);

    axios.get(`https://api.github.com/users/${username.current.value}`)
    .then((res)=>{
      console.log(res.data);
      setUser(res.data);
    }).catch((err)=>{
      console.log(err)
    })

  }
  return (
    <>
    <h1>Github</h1>
    <form onSubmit={getDetail}>
      <input type="text" placeholder='github username' ref={username} />
      <button type='submit'>Get Detail</button>
    </form>
    <div>
      {user ?
       <div>
        <h1>{user.name}</h1>
        <img src={user.avatar_url} alt="logo-image" />
        <p>{user.bio}</p>
       </div>
        : null}
    </div>
    </>
  )
}

export default App