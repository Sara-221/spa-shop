import React from 'react'
import { getProductByCategory } from '../helpers'
import {ProductItem} from './ProductItem'

export const ProductList = ({category}) => {

  const productos = getProductByCategory(category)

  return (
    <>
    <div className='row row-cols-3 row-cols-md-4 g-3 p-2 mb-5'>
        {
          productos.map(product=>(
            <ProductItem key={product.id} {...product}/>
          ))
        }
    </div>
    </>
  )
}
