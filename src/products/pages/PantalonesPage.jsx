import React from 'react'
import './pagesStyle.css'
import {ProductList} from '../components/ProductList'

export const PantalonesPage = () => {
  return (
    <>

    <div className='container-fluid titulo text-center p-4'> 
      <h1 className='display-1'>
          Shorts
      </h1>
      <h3>Discover your new favorites.</h3>
    </div>

    <section className='container-fluid bg-light'>
      <ProductList category={'pantalones'}/>
    </section>
    </>
  )
}
