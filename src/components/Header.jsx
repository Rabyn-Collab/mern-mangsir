import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='bg-black text-white px-4 py-2 flex items-baseline justify-between'>

      <h1 className='text-2xl'>Tailwind</h1>

      <nav className='space-x-4'>

        <NavLink to={'/about'} className='hover:bg-white hover:text-black px-4 py-2'>About</NavLink>
        <NavLink to={'/about'}>Contact</NavLink>

      </nav>

    </div>
  )
}

export default Header
