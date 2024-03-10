import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [loading, setLoading] = useState(false);
  const email = useRef()
  const password = useRef()

  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate('/login')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      })
      .finally(()=>{
        setLoading(false);
      })
  }

  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-items-center'>
      <form onSubmit={registerUser} className="d-flex justify-content-center flex-column w-25 gap-5">
        <TextField type="email" label="Email" variant="standard" inputRef={email} />
        <TextField type="password" label="Password" variant="standard" inputRef={password} />
        <Button type="submit" variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Register'}</Button>
      </form>
    </Box>
  )
}

export default Register