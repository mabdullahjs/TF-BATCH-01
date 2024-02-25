import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res.data);
        setTodo(res.data);
      }).catch((err) => {
        console.log(err);
      })
  }, [])

  const navigate = useNavigate();

  const goToNextRoute = (id) => {
    // console.log(id);
    navigate(`product/${id}`)
  }
  return (
    <>
      <h1 className='text-center mt-2'>All Todos</h1>
      <div className='flex justify-center gap-5 flex-wrap m-5'>
        {todo ? todo.map((item) => {
          return <div key={item.id} className='border-2 border-solid border-gray-300 rounded p-5'>
            <img src={item.image} alt="product-image" width='60px' />
            <h6>{item.title.slice(0, 10)}...</h6>
            <button className='bg-[#38bdf8] px-2 py-1 rounded' onClick={()=>goToNextRoute(item.id)}>See more!</button>
          </div>
        }) : <h1>Loading...</h1>}
      </div>
    </>
  )
}

export default Home