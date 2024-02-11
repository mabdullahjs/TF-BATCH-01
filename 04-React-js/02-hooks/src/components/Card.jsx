import React from 'react'

const Card = ({title , description , src}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[25rem]' src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title.slice(0 , 15)}...</h2>
                <p>{description.slice(0 , 50)}...</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Khareedlaa!</button>
                </div>
            </div>
        </div>
    )
}

export default Card