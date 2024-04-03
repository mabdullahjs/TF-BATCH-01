import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const params = useParams()
    console.log(params.id);

    useEffect(()=>{
      axios(`https://dummyjson.com/products/${params.id}`)
      .then((res)=>{
        console.log(res.data);
      });
    }, [])

  return (
    <div>Product</div>
  )
}

export default Product