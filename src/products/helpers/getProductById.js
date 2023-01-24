import React from 'react'
import { products } from '../data/dataProducts'

export const getProductById = (id) => {
  return products.find(product => product.id==id)
}
