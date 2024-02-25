import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams();
  const [product , setProduct] = useState(null);
  console.log(params);
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
    {
      product ? 
      <div>
        <h1>{product.title}</h1>
        <img width='150px' src={product.image} alt="image" />
        <p>{product.description}</p>
      </div> : <h1>Loading...</h1>
    }
    </>

  )
}

export default Product