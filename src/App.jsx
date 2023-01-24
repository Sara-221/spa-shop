import React from 'react'
import { AppRouter } from './router/AppRouter'
import {HomePage} from './products/pages/HomePage'
import { Footer } from './common/Footer'

const App = () => {
  return (
    <>

    <header>
      <AppRouter/>
    </header>

    {/* <main className={'container py-5'}>
      <HomePage/>
    </main> */}

    {/* Footer */}
    <Footer></Footer>
    </>
  )
}

export default App

