import React from 'react'
import { NavLink } from 'react-router'

const Header = () => {
  return (
    <div className='bg-black text-white px-4 py-2'>

      <h1>Web Logo</h1>

      <nav>

        <NavLink to={'/about'}>About</NavLink>

      </nav>

    </div>
  )
}

export default Header
