import { Box, Button, TextField, Typography, css } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { collection, addDoc, getDocs, doc, deleteDoc, Timestamp, query, where } from "firebase/firestore";
import { auth, db } from '../config/firebase/firebaseconfig';
import BasicCard from '../components/Card';


const Home = () => {
  const input = useRef();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "todos"), where("uid", "==", auth.currentUser.uid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
        setData([...data]);
      });

      const userq = query(collection(db, "users"), where("uid", "==", auth.currentUser.uid));
      const userSnapshot = await getDocs(userq);
      userSnapshot.forEach((doc) => {
        // user.push({ ...doc.data(), id: doc.id });
        setUser(doc.data());
        console.log(doc.data());
      });
      // console.log(user);
    }

    getData();
  }, []);

  const addTodo = async (event) => {
    event.preventDefault();
    console.log(input.current.value);
    console.log(auth.currentUser.uid);
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title: input.current.value,
        time: Timestamp.fromDate(new Date()),
        uid: auth.currentUser.uid
      });
      setData([{ title: input.current.value, id: docRef.id }, ...data]);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const deleteTodo = async (index) => {
    console.log('todo deleted', index);
    console.log(data[index]);
    try {
      await deleteDoc(doc(db, "todos", data[index].id));
      data.splice(index, 1);
      setData([...data]);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
    <img width='300px' src={user ? user.profileImage : ''} alt="" />
      <Typography variant='h4' className='text-center mt-3'>TODO APP!</Typography>
      <form onSubmit={addTodo} className='d-flex justify-content-center mt-3 gap-5 flex-column container'>
        <TextField id="filled-basic" label="Filled" variant="filled" inputRef={input} />
        <Button type='submit' variant="contained">Add</Button>
      </form>
      <Box className='d-flex justify-content-center flex-wrap gap-5 mt-5'>
        {data.length > 0 ? data.map((item, index) => {
          return <BasicCard key={index} title={item.title} deleteTodo={() => deleteTodo(index)} />
        }) : <h1>Data Not Found...</h1>}
      </Box>
    </>
  )
}

export default Home



// import { collection, query, where, getDocs } from "firebase/firestore";

// const q = query(collection(db, "cities"), where("uid", "==", auth.currentUser.uid));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });