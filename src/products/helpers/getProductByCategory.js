import React from 'react'
import {products} from '../data/dataProducts'

export const getProductByCategory = (category) => {

    const validCategory = ['camisetas', 'pantalones'];

    if(!validCategory.includes(category)) throw new Error('La categoria no existe')

    return products.filter(product=>product.category===category)
}
