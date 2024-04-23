import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useRef } from 'react'
import { db } from './config/firebase/firebaseconfig';

const App = () => {
  const username = useRef()
  const email = useRef()
  const age = useRef()
  const city = useRef()

  const [data, setData] = useState(null);

  //useeffect
  useEffect(() => {
    async function getData() {
      const arr = []
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), docid: doc.id });
      });
      setData(arr);
      console.log(arr)
    }
    getData()
  }, [])

  const addData = async (event) => {
    event.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        username: username.current.value,
        email: email.current.value,
        age: age.current.value,
        city: city.current.value
      });
      console.log("Document written with ID: ", docRef.id);
      setData([{
        username: username.current.value,
        email: email.current.value,
        age: age.current.value,
        city: city.current.value,
        docid: docRef.id
      }, ...data])
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  const deleteUser = async (index) => {
    console.log('user deleted', data[index]);
    await deleteDoc(doc(db, "users", data[index].docid));
    data.splice(index, 1);
    setData([...data]);
  }
  const editUser = async (index) => {
    console.log('user edited', data[index].docid);
    const update = doc(db, "users", data[index].docid);


    // Set the "capital" field of the city 'DC'
    await updateDoc(update, {
      username: 'updated username'
    });
  }



  return (
    <>
      <h1>Hello world</h1>
      <form onSubmit={addData}>
        <input type="text" placeholder='username' ref={username} />
        <input type="email" placeholder='email' ref={email} />
        <input type="text" placeholder='age' ref={age} />
        <input type="text" placeholder='city' ref={city} />
        <button >submit</button>
      </form>

      <div>
        {data ? data.map((item, index) => {
          return <div key={index}>
            <h1>Username : {item.username}</h1>
            <h1>Email : {item.email}</h1>
            <h1>City : {item.city}</h1>
            <h1>Age : {item.age}</h1>
            <button onClick={() => deleteUser(index)}>delete</button>
            <button onClick={() => editUser(index)}>edit</button>
            <hr />
          </div>
        }) : <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default App




//login signup jo data user bhejaiga firestore ka undar uska undar aik field or add hogi uid.