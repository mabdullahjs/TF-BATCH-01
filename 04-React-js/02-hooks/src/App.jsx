import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import axios from 'axios'
import Card from './components/Card'

const App = () => {

  const [data , setData] = useState(null);
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res.data);
      setData(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  } , [])
  return (
    <>
    <Navbar/>
    <h1 className='text-center mt-3 text-4xl'>My Products</h1>
    <div className='flex justify-center gap-5 flex-wrap mt-[5rem]'>
      {data && data.length > 0 ? data.map((item , index)=>{
        return <Card key={item.id} src={item.image} title={item.title} description={item.description}/>
      }) : <h1>Loading...</h1>}
    </div>
    </>
  )
}

export default App