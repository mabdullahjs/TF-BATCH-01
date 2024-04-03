import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ url, title, desc, id }) => {

    const navigate = useNavigate();
    function singleProduct() {
        console.log('single product called' , id)
        navigate(`/product/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-[300px] h-[200px]' src={url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{desc}</p>
                <div className="card-actions justify-end">
                    <button className="btn  btn-primary" onClick={singleProduct}>More Info.</button>
                </div>
            </div>
        </div>
    )
}

export default Card