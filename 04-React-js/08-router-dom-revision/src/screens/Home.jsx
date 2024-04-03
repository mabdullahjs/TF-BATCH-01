import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../components/Card';

const Home = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios(`https://dummyjson.com/products`)
      .then((res) => {
        console.log(res.data.products);
        setData(res.data.products);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

 

  return (
    <div className='flex justify-center gap-8 flex-wrap'>
      {data ? data.map((item)=>{
        return <Card key={item.id} url={item.thumbnail
        } title={item.title} desc={item.description} id={item.id} />
      }) : <h1>Loading..</h1>}

    </div>
  )
}

export default Home