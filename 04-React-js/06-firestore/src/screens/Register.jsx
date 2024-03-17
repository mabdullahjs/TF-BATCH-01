import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, CircularProgress, TextField } from '@mui/material'
import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../config/firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Timestamp, addDoc, collection } from "firebase/firestore";

const Register = () => {

  const [loading, setLoading] = useState(false);
  const email = useRef()
  const password = useRef()
  const firstname = useRef()
  const lastname = useRef()
  const profilepic = useRef()

  const navigate = useNavigate();

  const registerUser = (event) => {
    event.preventDefault();
    setLoading(true);
    const files = profilepic.current.files[0];

    const storageRef = ref(storage, email.current.value);
    uploadBytes(storageRef, files).then(() => {
      getDownloadURL(storageRef).then((url) => {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then(async (userCredential) => {
            const user = userCredential.user;
            console.log(user)
            const docRef = await addDoc(collection(db, "users"), {
              email: email.current.value,
              firstname: firstname.current.value,
              lastname: lastname.current.value,
              time: Timestamp.fromDate(new Date()),
              uid: user.uid,
              profileImage: url
            });
            navigate('/login');
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          })
          .finally(() => {
            setLoading(false);
          })
      });
    });


  }

  return (
    <Box sx={{ height: '80vh' }} className='d-flex justify-content-center align-items-center'>
      <form onSubmit={registerUser} className="d-flex justify-content-center flex-column w-25 gap-5">
        <TextField type="text" label="FirstName" variant="standard" inputRef={firstname} />
        <TextField type="text" label="LastName" variant="standard" inputRef={lastname} />
        <TextField type="email" label="Email" variant="standard" inputRef={email} />
        <TextField type="password" label="Password" variant="standard" inputRef={password} />
        <TextField type="file" label="Profile Pic" variant="standard" inputRef={profilepic} />
        <Button type="submit" variant="contained">{loading ? <CircularProgress sx={{ color: 'white' }} /> : 'Register'}</Button>
      </form>
    </Box>
  )
}

export default Register