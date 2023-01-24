import React from 'react'
import { Link } from 'react-router-dom'

export const ProductItem = ({id, name, price, url}) => {

  const urlImg = `/assets/img/large/${url}`

  return (
    <figure className='d-grid'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <img src={urlImg} alt={name} className='card-img' />
          <p className='card-text'>
              Price: {price}€
          </p>
          <Link to={`/producto/${id}`} className='btn btn-dark btn-sm'>See details</Link>
        </div>
      </div>
    </figure>
  )
}
