import React from 'react'
import {Link} from 'react-router-dom'

export const LoginPage = () => {
  return (
    <>
    <main className={'container py-5'}>
      <h1 className={'display-1'}>Welcome to SPA shop.</h1>
      <h2 className={'display-6'}>Start shopping now.</h2>
      <Link to='/productos' className={'btn btn-dark px-4 my-1 miBtn'}
              >Log in</Link>
    </main>
    </>
  )
}
