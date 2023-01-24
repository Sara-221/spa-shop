import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {HomePage, PantalonesPage, CamisetasPage, ProductPage} from '../products/pages'
import {LoginPage} from '../auth/pages/LoginPage'
import {Navbar} from '../common/Navbar'

export const ProductsRouter = () => {
  return (

    <>
    <Navbar/>
    

    <Routes>
      <Route path='/productos' element={<HomePage/>}></Route>
      <Route path='/pantalones' element={<PantalonesPage/>}></Route>
      <Route path='/camisetas' element={<CamisetasPage/>}></Route>
      <Route path='/producto/:id' element={<ProductPage/>}></Route>

      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/*' element={<Navigate to='/productos'/>}></Route>
    </Routes>
    </>
  )
}
