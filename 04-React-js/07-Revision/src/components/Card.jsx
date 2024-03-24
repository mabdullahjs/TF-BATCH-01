import React from 'react'

const Card = ({head , para , counter}) => {
  return (
    <div className='border-2 border-solid border-black m-5 p-5'>
        <h1>{head}</h1>
        <p>{para}</p>
        <p className='text-5xl'>{counter}</p>
    </div>
  )
}

export default Card