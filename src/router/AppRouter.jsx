import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {LoginPage} from '../auth/pages/LoginPage'
import {ProductsRouter} from './ProductsRouter'

export const AppRouter = () => {
  return (
    <>  

    <Routes>
      {/* <Route path='/productos' element={<HomePage/>}></Route>
      <Route path='/pantalones' element={<PantalonesPage/>}></Route>
      <Route path='/camisetas' element={<CamisetasPage/>}></Route>
      <Route path='/producto' element={<ProductPage/>}></Route> */}

      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/*' element={<ProductsRouter/>}></Route>
    </Routes>

    </>
  )
}
