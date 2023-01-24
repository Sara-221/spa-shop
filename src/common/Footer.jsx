import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className='miFooter container-fluid row p-3'>
        <NavLink className={'text-dark col-sm footerLink'} to='./productos'>Shop</NavLink>
        <NavLink className={'text-dark col-sm footerLink'} to='./productos'>About</NavLink>
        <NavLink className={'text-dark col-sm footerLink'} to='./productos'>My Account</NavLink>
    </footer>
  )
}
