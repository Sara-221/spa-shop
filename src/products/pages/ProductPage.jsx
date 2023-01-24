import React from 'react'
import {useParams} from 'react-router-dom'
import {getProductById} from '../helpers'
import '../../common/style.css'

export const ProductPage = () => {

  const {id}=useParams()

  const product = getProductById(id)
  const {id: productID, name, category, description, price, rating, url}=product;
  const urlImg = `/assets/img/large/${url}`


  return (
    <div className='container p-3 my-3 fondo'>

              <h2 className='h3 text-center pb-3'>{name}</h2>
              <div className='d-flex'>
                <div className='pr-2'>
                  <img src={urlImg} alt={name} className='img-fluid' />
                </div>
                <div className='px-5 text-justify'>
                  <div className='card-body'>
                  <p>{description}</p>
                    <p className='h4'><b>Price: </b>{price}€</p>
                    <p className='h4'><b>Rating: </b>{rating}€</p>
                    <div className='d-grid'>
                </div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}
